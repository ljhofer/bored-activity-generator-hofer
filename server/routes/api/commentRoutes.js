const router = require("express").Router();

const { addComment, updateComment, deleteComment};


router.route("/").post(addComment);
router.route("/:id").put(updateComment);
router.route("/:id").delete(deleteComment);

module.exports = router; 