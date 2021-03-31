const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clubAccountSchema = new Schema({
    firebaseId: { type: String, required: true },
    accountEmail: { type: String, required: true},
    clubProfileId: { type: String, default: null },
    verificationStatus: {
        type: String,
        enum: ['incomplete', 'pending', 'accepted', 'denied'],
        default: 'pending'
    },
    creationDate: { type: Date, default: Date.now },
    lastUpdateDate: { type: Date, default: null },
    deniedReason: { type: String, default: '' },
    authorityLevel: { type: String, default: 'user' }
});

const clubAccount = mongoose.model('ClubAccount', clubAccountSchema);

module.exports = clubAccount;
