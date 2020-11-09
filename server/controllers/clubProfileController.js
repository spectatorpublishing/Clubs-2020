const db = require('../models/')

module.exports = {
    getAll: function(req, res) {
	 var query = db.find({}).select({name: 1, description: 1, imageUrl: 1, tags: 1, memberRange: 1, acceptingMembers: 1, applicationRequired: 1});
	 res.send(query);
    },
    getById: function(req, res) {
        // TODO; req.params.id
    },
    create: function(req, res) {
        // TODO; req.body contains profile information
    },
    update: function(req, res) {
        // TODO; req.body contains profile information and req.params.id
    },
    delete: function(req, res) {
        // TODO: req.params.id
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
