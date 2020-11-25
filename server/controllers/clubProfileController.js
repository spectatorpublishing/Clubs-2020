const clubProfile = require("../models/ClubProfileModel")

module.exports = {
    getAll: function(req, res) {
        // TODO
        // support pagination with req.query 
        // support shuffle (i.e. randomize entry order)?? 
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

