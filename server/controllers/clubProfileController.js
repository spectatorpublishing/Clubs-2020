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
          'description': 1
        }
      }
    ]).exec()
      .then(similarClubs => {
        clubResult.set('similarClubs', similarClubs)
        res.json(clubResult)
      })
      .catch(err => res.status(422).json(err));
}

module.exports = {
    getAll: function(req, res) {
        clubProfile.find({})
            .select({_id: 1, name: 1, description: 1, imageUrl: 1, tags: 1, memberRange: 1, acceptingMembers: 1, applicationRequired: 1})
            .then(rdata => {
                var data = JSON.parse(JSON.stringify(rdata))
                var shuffledData = shuffle(data);
                
                res.send(shuffledData)
            })
            .catch(err => res.status(422).json(err));
    },

    getById: function(req, res) {
        clubProfile.findById( {_id: req.params.id} )
                .then(clubprofile => findSimilarClubs(res, clubprofile))
                .catch(err => res.status(422).json(err));
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
              // delete all previous records first
              clubProfile.findOneAndDelete({clubAccountId: req.params.accountId})
              .then(_ => {
                clubProfile.create({
                  ...req.body,
                  clubAccountId: req.params.accountId
                })
                .then(newProfile => {

                  newProfileJson = JSON.parse(JSON.stringify(newProfile))
                  ret.profile = newProfileJson

                  clubAccount.findByIdAndUpdate(
                    newProfileJson.clubAccountId, 
                    {clubProfileId: newProfileJson._id},
                    {
                      new: true,
                      useFindAndModify: false
                    }
                  )
                  .then(account => {
                    ret.account = JSON.parse(JSON.stringify(account))
                    res.json(ret)
                  })
                  .catch(err => errHandling(err, res));
                })
                .catch(err => errHandling(err, res));
              })
              .catch(err => errHandling(err, res));
            }})
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
          }
        })
        .catch(err => errHandling(err, res));

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
        .then(ret => res.json(ret))
        .catch(err => errHandling(err, res))
    },

    delete: function(req, res) {
        // TODO: req.params.id
        clubProfile.findByIdAndDelete({ _id: req.params.id })
                .then((profile) => res.json(profile))
                .catch(err => errHandling(err, res))
                
    },
    filterAndSortBy: function(req, res) {
        // TODO; req.query contains filter and/or sort information
        // support pagination with req.query 
        
    },
    search: function(req, res) {
        // TODO; req.query contains search query
        // support pagination with req.query 
    }
}