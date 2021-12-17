const router = require("express").Router();

const { getTopActivities, createActivity, getActivityById } = require('../../controllers/ActivityController');

router.route("/").get(getTopActivities);
router.route("/").post(createActivity);
router.route("/:id").put(getActivityById);

module.exports = router; 