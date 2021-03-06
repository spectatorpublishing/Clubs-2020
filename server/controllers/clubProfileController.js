const clubAccount = require("../models/ClubAccountModel");
const clubProfile = require("../models/ClubProfileModel");

const { errHandling, emptyProfile } = require("../common")

const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');

const shuffle = (sourceArray) => {
    for (var i = 0; i < sourceArray.length - 1; i++) {
        var j = i + Math.floor(Math.random() * (sourceArray.length - i));

        var temp = sourceArray[j];
        sourceArray[j] = sourceArray[i];
        sourceArray[i] = temp;
    }
    return sourceArray;
}

const findSimilarClubs = (res, clubResult) => {
  //create array of club account ids that are verified
    clubAccount.find({verificationStatus: 'accepted' }).select({_id: 1}).then( acceptedClubs => {
        
      clubs = []
      acceptedClubs.map(obj => (clubs.push(obj._id)))
      var clubs = JSON.parse(JSON.stringify(clubs));

    //aggregate up to 6 verified clubs with same tags 
      clubProfile.aggregate([
        {
          '$match': { '$and': [
            {
              'tags': {
                '$in': clubResult.tags
              }
            },
            {
              'clubAccountId': { 
                '$in': clubs
              }
            },
            {
              '_id': { '$ne': clubResult._id }
            }
          ]
          }
        }, {
          '$addFields': {
            'intersection': {
              '$setIntersection': [
                '$tags', clubResult.tags
              ]
            }
          }
        }, {
          '$addFields': {
            'length': {
              '$size': '$intersection'
            }
          }
        }, {
          '$sort': {
            'length': -1
          }
        }, {
          '$limit': 6
        }, {
          '$project': {
            '_id': 1,
            'name': 1,
            'tags': 1,
            'imageUrl': 1,
            'shortDescription': 1
          }
        }
      ]).exec()
        .then(similarClubs => {
          clubResult.set('similarClubs', similarClubs)
          res.json(clubResult)
        })
        .catch(err => res.status(422).json(err));
  })
}
//, status: 'complete'
module.exports = {
    getAll: function(req, res) {
        clubAccount.find({verificationStatus: 'accepted' }).select({clubProfileId: 1})
        .then( acceptedClubs => {
      
          clubs = []
          acceptedClubs.map(obj => (clubs.push(obj.clubProfileId)))

          // clubProfile.find({_id:{$in: clubs}, status: 'complete'})
          clubProfile.find({_id:{$in: clubs}})
            .select({_id: 1, name: 1, shortDescription: 1, imageUrl: 1, tags: 1, memberRange: 1, acceptingMembers: 1, applicationRequired: 1})
            .then(rdata => {
                var data = JSON.parse(JSON.stringify(rdata));
                var shuffledData = shuffle(data);
                
                res.send(shuffledData)
            })
            .catch(err => errHandling(err, res));
        })
        .catch(err =>  errHandling(err, res));
        
    },

    getById: function(req, res) {
        clubProfile.findById( {_id: req.params.id} )
                .then(clubprofile => findSimilarClubs(res, clubprofile))
                .catch(err => res.status(422).json(err));
    },

    createEmptyProfile: function(accountId) {
      // delete all previous records first
      return clubProfile.findOneAndDelete({clubAccountId: accountId})
      .then(_ => clubProfile.create({
          ...emptyProfile(),
          clubAccountId: accountId
        })
      )
      .then(newProfile => {
        newProfileJson = JSON.parse(JSON.stringify(newProfile))
        return clubAccount.findByIdAndUpdate(
          newProfileJson.clubAccountId, 
          {clubProfileId: newProfileJson._id},
          {
            new: true,
            useFindAndModify: false
          }
        )
      })
    },

    create: function(req, res) {
        ret = {account: null, profile: null}

        // check if the associated account exists
        clubAccount.findById(req.params.accountId)
          .then(account => {
            if (!account) {
              res.status(422).json({
                errName: "InvalidIdError",
                errMessage: "the account id is invalid"
              })
            } else {
              ret = this.createEmptyProfile(JSON.parse(JSON.stringify(account))._id) 
              res.json(ret)
            }
          })
          .catch(err => errHandling(err, res));
    },
    
    update: function(req, res) {
      // check if the associated account exists
      clubAccount.findById(req.params.accountId)
        .then(account => {
          if (!account) {
            errHandling({
              name: "InvalidId",
              message: "The account id is invalid"
            }, res)
          } else {
            // update the profile (including lastUpdated time)
            // if profile doesn't exist, insert new one
            clubProfile.findOneAndUpdate(
              {clubAccountId: req.params.accountId},
              {
                ...req.body,
                clubAccountId: req.params.accountId,
                lastUpdated: Date.now()
              },
              {
                new: true,
                useFindAndModify: false,
                upsert: true
              }
            )
              .then(ret => {
                // if this is for final submission of a profile
                // and the profile status was previously 'incomplete'
                // change it to 'complete'
                if (req.query.submit) {
                  if (ret.status === 'incomplete'){
                    ret.status = 'complete'
                    ret.save()
                  }
                }
                res.json(ret)
              })
              .catch(err => errHandling(err, res))
          }
        })
        .catch(err => errHandling(err, res));
    },

    delete: function(req, res) {
        // check if the associated account exists
        clubAccount.findById(req.params.accountId)
          .then(account => {
            if (!account) {
              errHandling({
                name: "InvalidId",
                message: "The account id is invalid"
              }, res)
            } else {
              account.set('clubProfileId', null)
              clubProfile.findOneAndDelete({clubAccountId: req.params.accountId})
                .then(profile => res.json(profile))
                .catch(err => errHandling(err, res));
            }})
          .catch(err => errHandling(err, res));
    },
    filterAndSortBy: function(req, res) {
        // TODO; req.query contains filter and/or sort information
        var specs = {}
        // {verificationStatus: 'accepted' }
        // specs["verificationStatus"] = 'accepted'
        if (req.query.memberRange) {
          specs['memberRange'] = {$in: req.query.memberRange}
        }
        if (req.query.tags) {
          specs['tags'] = {$in: req.query.tags}
        }
        if (req.query.acceptingMembers) {
          specs['acceptingMembers'] = req.query.acceptingMembers
        }
        if (req.query.applicationRequired) {
          specs['applicationRequired'] = req.query.applicationRequired
        }
        clubAccount.find({verificationStatus: 'accepted' }).select({clubProfileId: 1})
        .then( acceptedClubs => {
      
          clubs = []
          acceptedClubs.map(obj => (clubs.push(obj.clubProfileId)))

          specs['_id']= {$in: clubs}
          clubProfile.find(specs)
          .then(clubprofile => res.json(clubprofile))
          .catch(err => errHandling(err, res)); 

        })
        .catch(err =>  errHandling(err, res));

        
      
    },


    search: function(req, res) {

        let searchInput = req.query.search;
        let resultingData = [];

        var seenData = new Set();



        clubAccount.find({verificationStatus: 'accepted' }).select({clubProfileId: 1})
        .then( acceptedClubs => {
      
          clubs = []
          acceptedClubs.map(obj => (clubs.push(obj.clubProfileId)))

          // specs['_id']= {$in: clubs}
          
          
          clubProfile.find({_id: {$in: clubs}, name:{$regex: searchInput, $options: 'i'}})
          .then(q1=>{
            
            let arr = JSON.parse(JSON.stringify(q1));

            for (i = 0; i < arr.length; i++) {
              if ( !(seenData.has(arr[i].name)) ) {
                seenData.add(arr[i].name );
                resultingData.push(arr[i]);
              } 
            }

            clubProfile.find( {_id: {$in: clubs}, longDescription:{$regex: searchInput, $options: 'i'} })
            .then(q2=>{
              let arr = JSON.parse(JSON.stringify(q2));

              for (i = 0; i < arr.length; i++) {
                if ( !(seenData.has(arr[i].name)) ) {
                  seenData.add(arr[i].name );
                  resultingData.push(arr[i]);
                } 
              }

              clubProfile.find({_id: {$in: clubs}, shortDescription:{$regex: searchInput, $options: 'i'}})
              .then(q3 =>{
                let arr = JSON.parse(JSON.stringify(q3));

                for (i = 0; i < arr.length; i++) {
                  if ( !(seenData.has(arr[i].name)) ) {
                    seenData.add(arr[i].name );
                    resultingData.push(arr[i]);
                  } 
                }

                res.json(resultingData);
              

              }).catch(err => res.status(422).json(err));
              
            }).catch(err => res.status(422).json(err));
            
          })
          .catch(err => res.status(422).json(err));


          
        })
        .catch(err =>  errHandling(err, res));

        
        
        
    },
    /*
    imgUpload: function(req,res) {
      
      clubProfile.findOneAndUpdate({ _id: req.params.id},{imageUrl: req.file.location}, {useFindAndModify: false}).then(clubprofile => res.json(clubprofile)).catch(err => errHandling(err, res))
    }
    */ 
}