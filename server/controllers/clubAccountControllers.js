const clubAccount = require("../models/ClubAccountModel")
const clubProfile = require("../models/ClubProfileModel")
const config = require("../config")
const errHandling = require("../common").errHandling

/*
Setting up email-sending transporter

This app uses gmail's smtp server. To set up the sender's account, 
0. Create the google account, and copy the username to the "user" field below
1. Go to gmail > settings > all settings > Forwarding and POP/IMAP > Enable IMAP > Save Changes
2. Go to google account > Security > Turn on 2-step verification
3. Go to google account > App passwords > App: Mail; device: custom (enter random name) > Generate > copy password in "pass" field below
4. To ensure this works on heroku's machine too, go to https://accounts.google.com/b/0/DisplayUnlockCaptcha and allow access to sender account

for partial reference: https://jay315.medium.com/sending-email-using-express-js-with-nodemailer-in-heroku-71741f29463c
*/
const nodemailer = require("nodemailer");
var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        // should be replaced with real sender's account
        user: 'hello@gmail.com',
        pass: 'jafjioaejiofajio'
    }
  });

transporter.verify(function(error, _) {
    if (error) {
         console.log(error);
    } else {
         console.log('Stmp server is ready to take mails');
    }
 });

const message = (email, status, text) => ({
    to: email,
    subject: `[LionsClub] Your club profile has been ${status}`,
    text: text
})

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
            .then((account) => {
                var mes
                if (req.body.status === 'denied'){
                    mes = message(
                        JSON.parse(JSON.stringify(account)).accountEmail,
                        'denied',
                        `Hi, your club account associated with this email has been denied`
                        `the reason being ${req.body.deniedReason ? req.body.deniedReason : ""}. `
                        `Please review your profile for any unclear or offensive information, and contact us with any further questions.`
                    )
                } else if (req.body.status === 'accepted'){
                    mes = message(
                        JSON.parse(JSON.stringify(account)).accountEmail,
                        'accepted!',
                        `Congratulations! Your club account associated with this email has been verified. Go check out your club on lionclubs!`
                    )
                }
                if (mes) {
                    transporter.sendMail(mes, (error, info) => {
                        if (error) {
                            return console.log("nodemailer error", error);
                        }
                        console.log('Message sent: %s', info.messageId);
                    })
                }
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