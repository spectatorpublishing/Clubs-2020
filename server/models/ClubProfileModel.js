const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clubProfileSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    lastUpdated: { type: Date, default: Date.now() },
    imageUrl: { type: String, default: '' },
    memberRange: { type: String, required: true },
    acceptingMembers: { type: Boolean, required: true },
    applicationRequired: { type: Boolean, required: true },
    meetingFrequency: { type: String, required: true },
    socialLinks: {
        type: Map,
        of: String,
        default: {
            facebook: '',
            email: '',
            website: '',
        }
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

});

const clubProfile = mongoose.model('ClubProfile', clubProfileSchema);

module.exports = clubProfile;
