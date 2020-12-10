const clubAccount = require("../models/ClubAccountModel")
const clubProfile = require("../models/ClubProfileModel")
const config = require("../config")


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
        var rdata = {};
        var date = new Date()
        date.setDate(date.getDate() - config.discardAfterXDays)

        clubAccount.find( {verificationStatus: 'pending'} )
            .sort( {creationDate: 1, lastUpdateDate: -1} ).then(
                q1 =>{ 
                    rdata.pending = JSON.parse(JSON.stringify(q1))
                    clubProfile.find({
                        verificationStatus: 'accepted',
                        lastUpdateDate:  {
                            //Updated within the last 14 days
                            $gte: date
                        }
                    }).sort( {lastUpdateDate: 1, creationDate: 1} ).then(
                        q2 => {
                            rdata.accepted = JSON.parse(JSON.stringify(q2))

                            clubProfile.find({
                                verificationStatus: 'denied',
                                lastUpdateDate:  {
                                    //Updated within the last 14 days
                                    $gte: date
                                }
                            }).sort( {lastUpdateDate: -1, creationDate: -1} ).then(
                                q3 => {
                                    rdata.denied = JSON.parse(JSON.stringify(q3))
                                    res.json(rdata)
                                }
                            ).catch(err => res.status(422).json(err));

                        }
                    ).catch(err => res.status(422).json(err));

                }
            ).catch(err => res.status(422).json(err));
    }
}