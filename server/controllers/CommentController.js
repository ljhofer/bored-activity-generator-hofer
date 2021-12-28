const { Comment, User } = require("../models");

module.exports = {

    async createComment(req, res) {
        const commentObj = { text: req.body.text, postedBy: req.body.userId };
        const comment = await Comment.create(commentObj);

        if (!comment) {
            return res.status(400).json({ message: "Unable to submit comment." });
        }

        res.status(200).json(comment);

    }, 


    async getCommentById(req, res) {
        const comment = await Comment.findOne({ _id: req.params.id })

        if (!comment) {
            return res.status(400).json({ message: "No post with that ID found."});
        }

        res.status(200).json(comment);
    },

    async updateComment(req, res) {
        const comment = await Comment.findOneAndUpdate({ _id: req.params.id }, req.body);

        if (!comment) {
            return res.status(400).json({ message: "Unable to update comment." });
        }

        res.status(200).json(comment);
    }, 

    async deleteComment(req, res) {
        try {
            const comment = await Comment.findById(req.params.id);
            if (comment.userId === req.body.userId) {
                await comment.deleteOne();
                res.status(200).json("The comment has been deleted");
            } else {
                res.status(403).json("You can only delete your own comments.");
            }
        } catch (err) {
            res.status(500).json(err);
            console.log(err);
        }    
    }
}
