const router = require("express").Router();

const { createComment, getCommentById, updateComment, deleteComment} = require('../../controllers/CommentController');


router.route("/").post(createComment);
router.route("/:id").get(getCommentById);
router.route("/:id").put(updateComment);
router.route("/:id").delete(deleteComment);

module.exports = router; 