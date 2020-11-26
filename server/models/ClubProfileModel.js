const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clubProfileSchema = new Schema({
    name: { type: String, required: true },
    longDescription: { type: String, required: true },
    shortDescription: { type: String, required: true },
    lastUpdated: { type: Date, default: Date.now() },
    imageUrl: { type: String, default: '' },
    memberRange: { type: String, required: true },
    acceptingMembers: { type: Boolean, required: true },
    springRecruiting: { type: Boolean, required: true },
    fallRecruiting: { type: Boolean, required: true },
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
    showInstagramFeed: { type: Boolean, required: true },
    similarClubs: {
        type: [Object], default: []
    }
});

const clubProfile = mongoose.model('ClubProfile', clubProfileSchema);

module.exports = clubProfile;
