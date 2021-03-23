const errHandling = (err, res) => {
    res.status(422).json({
        "errType": err.name,
        "errMessage": err.message
    })
}

const emptyProfile = () => ({
    name: ' ',
    longDescription: ' ',
    shortDescription: ' ',
    imageUrl: ' ',
    memberRange: ' ',
    acceptingMembers: false,
    springRecruiting: false,
    fallRecruiting: false,
    applicationRequired: false,
    meetingFrequency: ' ',
    tags: [],
    showInstagramFeed: false,
})

module.exports = {
    errHandling,
    emptyProfile
}