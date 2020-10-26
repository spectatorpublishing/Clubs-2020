const fns = require('../controllers/clubProfileController')
const router = require('express').Router()

router.route("/filterAndSort").get(fns.filterAndSortBy)
router.route("/search").get(fns.search)
router.route("/:id").get(fns.getById)
router.route("/").get(fns.getAll)

router.route("/submit").post(fns.create)
router.route("/update/:id").put(fns.update)
router.route("/delete/:id").delete(fns.delete)

module.exports = router