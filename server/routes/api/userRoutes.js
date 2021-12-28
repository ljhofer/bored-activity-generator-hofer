const router = require("express").Router();

const { createUser, getUserById, updateUser, login } = require("../../controllers/UserController");

// router.route("/").post(createUser);
// router.route("/:id").get(getUserById);
// router.route("/:id").put(updateUser);
// router.route("/login").post(login);

module.exports = router; 

