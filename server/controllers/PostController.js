const { Post } = require("../models");

// getPosts, createPost, getPostById, updatePost, deletePost 

module.exports = {

    async createPost(req, res) {
        const post = await Post.create(req.body);

        if (!post) {
            return res.status(400).json({ message: "Unable to create post."});
        }

        res.status(200).json(post);
    }
}