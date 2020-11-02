const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clubProfileSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    lastUpdated: { type: Date, default: Date.now() },
    imageUrl: { type: String, default: '' },
    memberRange: { type: String, required: true },
    acceptingMembers: { type: String, required: true },
    applicationRequired: { type: Boolean, required: true },
    meetingFrequency: { type: String, required: true },
    socialLinks: {
        facebook: { type: String, default: '' },
        email: { type: String, default: '' },
        website: { type: String, default: '' },
        instagram: { type: String, default: '' },
    },
    tags: {
        type: [String],
        required: true
    },
    highlights: {
        type: [String],
        default: []
    },
    howToJoin: { type: String, default: '' },
    applicationLink: { type: String, default: '' },
    similarClubs: {
        type: [mongoose.Types.ObjectId],
        default: []
    },
    showInstagramFeed: { type: Boolean, required: true },

});

const clubProfile = mongoose.model('ClubProfile', clubProfileSchema);

module.exports = clubProfile;
