const router = require("express").Router();
const activityRoutes = require("./userRoutes");
const commentRoutes = require("./commentRoutes");
const postRoutes = require("./postRoutes");
const userRoutes = require("./userRoutes");

router.use("/user", userRoutes);
router.use("/comment", commentRoutes);
router.use("/post", postRoutes);
router.use("/user", userRoutes);

module.exports = router; 