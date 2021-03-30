const clubProfileControllers = require('../controllers/clubProfileController')
const router = require('express').Router()

router.route("/filterAndSortBy").get(clubProfileControllers.filterAndSortBy)
router.route("/search").get(clubProfileControllers.search)
router.route("/:id").get(clubProfileControllers.getById)
router.route("/").get(clubProfileControllers.getAll)

router.route("/submit").post(clubProfileControllers.create)
router.route("/update/:id").put(clubProfileControllers.update)
router.route("/delete/:id").delete(clubProfileControllers.delete)
router.route("/imgUpload/:id").post(clubProfileControllers.imgUpload)

module.exports = router