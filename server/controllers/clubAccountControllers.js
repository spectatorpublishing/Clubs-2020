const clubAccount = require("../models/ClubAccountModel")
const clubProfile = require("../models/ClubProfileModel")
const config = require("../config")

module.exports = {
    create: function(req, res){
        clubAccount.create(req.body)
            .then(newAccount => res.json(newAccount))
            .catch(err => res.status(422).json(err));
    },
    delete: function(req, res){
        clubAccount.find({firebaseId: req.params.firebaseId})
            .then((account) => {
                const accountJson = JSON.parse(JSON.stringify(account))
                const profileId = accountJson.clubProfileId
                if (profileId) {
                    clubProfile.findByIdAndDelete({_id: profileId})
                    .catch(err => res.status(422).json(err))
                }
            })
            .then(() => clubAccount.findOneAndDelete({firebaseId: req.params.firebaseId}))
            .then((account) => res.json(account))
            .catch(err => res.status(422).json(err));
    },
    changeVerificationStatus: function(req, res){
        clubAccount.findByIdAndUpdate(req.params.id, {
            $set:{
                verificationStatus: req.body.status,
                deniedReason: req.body.deniedReason,
                lastUpdateDate: Date.now()
            }
            
        }, {
            useFindAndModify: false,
            new: true
        })
            .then(account => res.json(account))
            .catch(err => res.status(422).json(err));
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
                    clubAccount.find({
                        verificationStatus: 'accepted',
                        lastUpdateDate:  {
                            //Updated within the last 14 days
                            $gte: date
                        }
                    }).sort( {lastUpdateDate: -1} ).then(
                        q2 => {
                            rdata.accepted = JSON.parse(JSON.stringify(q2))

                            clubAccount.find({
                                verificationStatus: 'denied',
                                lastUpdateDate:  {
                                    //Updated within the last 14 days
                                    $gte: date
                                }
                            }).sort( {lastUpdateDate: -1} ).then(
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