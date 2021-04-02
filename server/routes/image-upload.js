const clubProfile = require("../models/ClubProfileModel");
const express = require("express");
const router = express.Router();

const upload = require('../services/image-upload');
const clubProfileControllers = require('../controllers/clubProfileController')

const singleUpload = upload.single('image');

router.route('/imgUpload/:id').post(function(req,res) {
    singleUpload(req,res,function(err) {
        clubProfile.findOneAndUpdate({ _id: req.params.id},{imageUrl: req.file.location}, {useFindAndModify: false}).then(profile => console.log(profile)).catch(err => console.log('error:', err));
        return res.json({'imageUrl': req.file.location});
    })
});

module.exports = router;

