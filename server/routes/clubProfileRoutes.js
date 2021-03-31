const clubProfileControllers = require('../controllers/clubProfileController')
const router = require('express').Router()

router.route("/filterAndSortBy").get(clubProfileControllers.filterAndSortBy)
router.route("/search").get(clubProfileControllers.search)
router.route("/:id").get(clubProfileControllers.getById)
router.route("/").get(clubProfileControllers.getAll)

router.route("/submit/:accountId").post(clubProfileControllers.create)
router.route("/update/:accountId").put(clubProfileControllers.update)
router.route("/delete/:accountId").delete(clubProfileControllers.delete)

module.exports = router