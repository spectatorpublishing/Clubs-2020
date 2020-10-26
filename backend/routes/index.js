const router = require('express').Router()
const clubProfileRoutes = require('./clubProfileRoutes')

router.use("/api/clubProfiles", clubProfileRoutes)

module.exports = router