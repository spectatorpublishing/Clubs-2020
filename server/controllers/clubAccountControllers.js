const clubAccount = require("../models/ClubAccountModel")
const clubProfile = require("../models/ClubProfileModel")
const config = require("../config")

const errHandling = require("../common").errHandling

module.exports = {
    create: function(req, res){
        clubAccount.find({firebaseId: req.body.firebaseId})
            .then((ret) => {
                if (ret && ret.length != 0) {
                    res.json(ret[0])
                } else {
                    clubAccount.create({
                        accountEmail: req.body.accountEmail,
                        firebaseId: req.body.firebaseId
                    })
                        .then(newAccount => res.json(newAccount))
                        .catch(err => errHandling(err, res));
                }
            })
            .catch(err => errHandling(err, res));
    },
    delete: function(req, res){
        const ret = {}
        clubAccount.findOneAndDelete({firebaseId: req.params.firebaseId})
            .then(account => {
                if (account) {
                    ret.account = JSON.parse(JSON.stringify(account))
                    var profileId = ret.account.clubProfileId

                    if (profileId) {
                        clubProfile.findByIdAndDelete({_id: profileId})
                            .then(profile => {
                                ret.profile = JSON.parse(JSON.stringify(profile))
                                res.json(ret)
                            })
                            .catch(err => errHandling(err, res));
                    } else {
                        res.json(ret)
                    }
                } else {
                    res.json(ret)
                }
            })
            .catch(err => errHandling(err, res));
    },
    changeVerificationStatus: function(req, res){
        clubAccount.findByIdAndUpdate(req.params.id, {
            verificationStatus: req.body.status,
            deniedReason: req.body.deniedReason ? req.body.deniedReason : "",
            lastUpdateDate: Date.now()
        }, {
            useFindAndModify: false,
            new: true
        })
            .then(account => {
                if (req.params.status == 'denied')
                res.json(account)
            })
            .catch(err => errHandling(err, res));
    },
    getProfile: function(req, res){
        clubProfile.find({clubAccountId: req.params.id})
            .then(profile => profile.length > 0 ? 
                res.json(profile[0]) : res.json(profile))
            .catch(err => errHandling(err, res));
    },
    getById: function(req, res){
        clubAccount.findById( {_id: req.params.id} )
            .then(clubaccount => res.json(clubaccount))
            .catch(err => errHandling(err, res));
    },
    getByFirebaseId: function(req, res){
        clubAccount.find( {firebaseId: req.params.firebaseId} )
            .then(account => account.length > 0 ? 
                res.json(account[0]) : res.json(account))
            .catch(err => errHandling(err, res));
    },
    getAll: function(req, res){
        //Accepted and denied needs to have been updated within the last 14 days
        var rdata = {};
        var date = new Date()
        date.setDate(date.getDate() - config.discardAfterXDays)

        //query for pending and sort, query for nonpending and sort
        clubAccount.find( {verificationStatus: 'pending'} )
            .sort( {creationDate: 1, lastUpdateDate: -1} ).then(
                q1 =>{ 
                    rdata.pending = JSON.parse(JSON.stringify(q1))
                    clubAccount.find({
                        verificationStatus: 'accepted',
                        lastUpdateDate:  {
                            $gte: date
                        }
                    }).sort( {lastUpdateDate: -1} ).then(
                        q2 => {
                            rdata.accepted = JSON.parse(JSON.stringify(q2))

                            clubAccount.find({
                                verificationStatus: 'denied',
                                lastUpdateDate:  {
                                    $gte: date
                                }
                            }).sort( {lastUpdateDate: -1} ).then(
                                q3 => {
                                    rdata.denied = JSON.parse(JSON.stringify(q3))
                                    res.json(rdata)
                                }
                            ).catch(err => errHandling(err, res));

                        }
                    ).catch(err => errHandling(err, res));

                }
            ).catch(err => errHandling(err, res));
    }
}