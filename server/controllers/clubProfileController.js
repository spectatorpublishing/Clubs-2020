const clubAccount = require("../models/ClubAccountModel");
const clubProfile = require("../models/ClubProfileModel")

const errHandling = require("../common").errHandling

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
    clubProfile.aggregate([
      {
        '$match': { '$and': [
          {
            'tags': {
              '$in': clubResult.tags
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
      .catch(err => errHandling(err, res));
}
//, status: 'complete'
module.exports = {
    getAll: function(req, res) {
        clubAccount.find({verificationStatus: 'accepted' }).select({clubProfileId: 1})
        .then( acceptedClubs => {
      
          clubs = []
          acceptedClubs.map(obj => (clubs.push(obj.clubProfileId)))

          clubProfile.find({_id:{$in: clubs}, status: 'complete'})
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
                .catch(err => errHandling(err, res));
    },
    create: function(req, res) {
        clubProfile.create(req.body)
                .then(newclubProfile => res.json(newclubProfile))
                .catch(err => errHandling(err, res))
    },
    update: function(req, res) {
        clubProfile.findOneAndUpdate({ _id: req.params.id}, req.body)
                .then(clubprofile => res.json(clubprofile))
                .catch(err => errHandling(err, res))
    },
    delete: function(req, res) {
        clubProfile.findByIdAndDelete({ _id: req.params.id })
                .then((profile) => res.json(profile))
                .catch(err => errHandling(err, res))
                
    },
    filterAndSortBy: function(req, res) {
        // TODO; req.query contains filter and/or sort information

        var specs = {}
        if (req.query.memberRange) {
          specs['memberRange'] = {$in: req.query.memberRange}
        }
        if (req.query.tags) {
          specs['tags'] = {$in: req.query.tags}
        }
        if (req.query.acceptingMembers) {
          specs['acceptingMembers'] = Boolean(req.query.acceptingMembers)
        }
        if (req.query.applicationRequired) {
          specs['applicationRequired'] = Boolean(req.query.applicationRequired)
        }
        
        clubProfile.find(specs)
          .then(clubprofile => res.json(clubprofile))
          .catch(err => errHandling(err, res)); 
      
    },


    search: function(req, res) {

        let searchInput = req.query.search;
        let resultingData = [];

        var seenData = new Set();

        clubProfile.find({name:{$regex: searchInput, $options: 'i'}})
        .then(q1=>{
          
          let arr = JSON.parse(JSON.stringify(q1));

          for (i = 0; i < arr.length; i++) {
            if ( !(seenData.has(arr[i].name)) ) {
              seenData.add(arr[i].name );
              resultingData.push(arr[i]);
            } 
          }

          clubProfile.find( {longDescription:{$regex: searchInput, $options: 'i'} })
          .then(q2=>{
            let arr = JSON.parse(JSON.stringify(q2));

            for (i = 0; i < arr.length; i++) {
              if ( !(seenData.has(arr[i].name)) ) {
                seenData.add(arr[i].name );
                resultingData.push(arr[i]);
              } 
            }

            clubProfile.find({shortDescription:{$regex: searchInput, $options: 'i'}})
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
        
        
    },
    
    imgUpload: function(req,res) {
      console.log(req.body)
      res.json('success')
    } 
}