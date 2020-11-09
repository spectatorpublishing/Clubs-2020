module.exports = {
    getAll: function(req, res) {
        // TODO
        // support pagination with req.query 
        // support shuffle (i.e. randomize entry order)?? 
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