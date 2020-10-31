const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clubOverviewSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, default: '' },
    memberRange: { type: String, required: true },
    acceptingMembers: { type: Boolean, required: true },
    applicationRequired: { type: Boolean, required: true },
    tags: {
        type: [String],
        required: true
    },

});

const clubOverview = mongoose.model('ClubOverview', clubOverviewSchema);

module.exports = clubOverview;