const { Comment, User } = require("../models");

// addComment, updateComment, deleteComment

module.exports = {

    async createComment(req, res) {
        const commentObj = { text: req.body.text, postedBy: req.body.userId };
        const comment = await Comment.create(commentObj);

        if (!comment) {
            return res.status(400).json({ message: "Unable to submit comment." });
        }

        res.status(200).json(comment);

    }
}
