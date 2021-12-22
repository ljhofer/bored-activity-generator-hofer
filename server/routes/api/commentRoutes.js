const router = require("express").Router();

const { createComment, updateComment, deleteComment} = require('../../controllers/CommentController');


router.route("/").post(createomment);
router.route("/:id").put(updateComment);
router.route("/:id").delete(deleteComment);

module.exports = router; 