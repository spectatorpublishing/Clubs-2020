const clubAccount = require("../models/ClubAccountModel");
const clubProfile = require("../models/ClubProfileModel");

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
        // TODO
    },
    getById: function(req, res){
        // TODO
    },
    getByFirebaseId: function(req, res){
        // TODO
    },
    getAll: function(req, res){
        // TODO
    }
}