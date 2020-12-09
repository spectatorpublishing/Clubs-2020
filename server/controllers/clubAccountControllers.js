const clubAccount = require("../models/ClubAccountModel")
const clubProfile = require("../models/ClubProfileModel")

module.exports = {
    create: function(req, res){
        // TODO
    },
    delete: function(req, res){
        // TODO
    },
    changeVerificationStatus: function(req, res){
        // TODO
    },
    getProfile: function(req, res){
        clubProfile.find( {clubAccountId: req.params.id} )
            .then(clubprofile => res.json(clubprofile))
            .catch(err => res.status(422).json(err))
    },
    getById: function(req, res){
        clubAccount.findById( {_id: req.params.id} )
            .then(clubaccount => res.json(clubaccount))
            .catch(err => res.status(422).json(err))
    },
    getByFirebaseId: function(req, res){
        clubAccount.find( {firebaseId: req.params.firebaseId} )
            .then(clubaccount => res.json(clubaccount))
            .catch(err => res.status(422).json(err))
    },
    getAll: function(req, res){
        //query for pending and sort, query for nonpending and sort
        var q1 = clubAccount.find( {verificationStatus: 'pending'} )
            .sort( {lastUpdateDate: -1, creationDate: -1} );
        var q2 = clubProfile.find({
            verificationStatus: {$in: ['accepted', 'denied']},
            lastUpdateDate:  {
                //Updated within the last 14 days
                $gte: (new Date(ISODate().getTime() - 1000 * 3600 * 24 * 14))
            }
        }).sort( {lastUpdateDate: -1, creationDate: -1} );
        
        //combine pending and nonpending then return full array if no issues
        var pendingData = JSON.parse(JSON.stringify(q1));
        var nonPendingData = JSON.parse(JSON.stringify(q2));

        pendingData.concat(nonPendingData)
            .then(rdata => res.json(rdata))
            .catch(err => res.status(422).json(err))

    }
}