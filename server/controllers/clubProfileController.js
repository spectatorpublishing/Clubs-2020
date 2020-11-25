const clubProfile = require("../models/ClubProfileModel")

function shuffle(sourceArray) {
    for (var i = 0; i < sourceArray.length - 1; i++) {
        var j = i + Math.floor(Math.random() * (sourceArray.length - i));

        var temp = sourceArray[j];
        sourceArray[j] = sourceArray[i];
        sourceArray[i] = temp;
    }
    return sourceArray;
}

module.exports = {
    getAll: function(req, res) {
        db.find({})
            .select({name: 1, description: 1, imageUrl: 1, tags: 1, memberRange: 1, acceptingMembers: 1, applicationRequired: 1})
            .then(query => {
                var data = query.toJSON();
                var shuffledData = shuffle(data);

                res.json(shuffledData)
            })
            .catch(err => res.status(422).json(err));
    },
    getById: function(req, res) {
        // TODO; req.params.id
        clubProfile.findById( {_id: req.params.id} )
                .then(clubprofile => res.json(clubprofile))
                .catch(err => res.status(422).json(err));

    },
    create: function(req, res) {
        // TODO; req.body contains profile information
        clubProfile.create(req.body)
                .then(newclubProfile => res.json(newclubProfile))
                .catch(err => res.status(422).json(err))
    },
    update: function(req, res) {
        // TODO; req.body contains profile information and req.params.id
        clubProfile.findOneAndUpdate({ _id: req.params.id}, req.body)
                .then(clubprofile => res.json(clubprofile))
                .catch(err => res.status(422).json(err))
    },
    delete: function(req, res) {
        // TODO: req.params.id
        clubProfile.findById({ _id: req.params.id })
                .then(clubprofile => clubprofile.remove())
                .then(allprofiles => res.json(allprofiles))
                .catch(err => res.status(422).json(err))
                
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

