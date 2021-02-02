const clubAccountControllers = require("../controllers/clubAccountControllers")
const router = require('express').Router()

router.route("/create").post(clubAccountControllers.create)
router.route("/update/:id").put(clubAccountControllers.changeVerificationStatus)
router.route("/delete/:firebaseId").delete(clubAccountControllers.delete)

router.route("/getProfile/:id").get(clubAccountControllers.getProfile)
router.route("/getById/:id").get(clubAccountControllers.getById)
router.route("/getByFirebaseId/:firebaseId").get(clubAccountControllers.getByFirebaseId)

router.route("/getAll").get(clubAccountControllers.getAll)

module.exports = router