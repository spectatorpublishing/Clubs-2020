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
      .catch(err => errHandling(err, res));
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
            .catch(err => errHandling(err, res));
    },
    getById: function(req, res) {
        // TODO; req.params.id
        clubProfile.findById( {_id: req.params.id} )
                .then(clubprofile => findSimilarClubs(res, clubprofile))
                .catch(err => errHandling(err, res));
    },
    create: function(req, res) {
        // TODO; req.body contains profile information
        clubProfile.create(req.body)
                .then(newclubProfile => res.json(newclubProfile))
                .catch(err => errHandling(err, res))
    },
    update: function(req, res) {
        // TODO; req.body contains profile information and req.params.id
        clubProfile.findOneAndUpdate({ _id: req.params.id}, req.body)
                .then(clubprofile => res.json(clubprofile))
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