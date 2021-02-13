const errHandling = (err, res) => {
    res.status(422).json({
        "errType": err.name,
        "errMessage": err.message
    })
}

module.exports = {
    errHandling
}