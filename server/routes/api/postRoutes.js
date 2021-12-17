const router = require("express").Router();

const { getPosts, createPost, getPostById, updatePost, deletePost } = require('../../controllers/PostController');


router.route("/").get(getPosts);
router.route("/").post(createPost);
router.route("/:id").get(getPostById);
router.route("/:id").put(updatePost);
router.route("/:id").delete(deletePost);

module.exports = router; 

