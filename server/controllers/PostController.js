const { Post } = require("../models");

// getPosts, getPostById, updatePost, deletePost 

module.exports = {

    async getPosts(req, res) {
        const allPosts = await Post.find({}).populate({
            path: "comments",
            populate: {
                path: "postedBy",
                model: "User" 
            }
        });

        if (!allPosts) {
            return res.status(400).json({ message: "No posts found."});
        }

        res.status(200).json(allPosts);
    },
 
    async createPost(req, res) {
        const post = await Post.create(req.body);

        if (!post) {
            return res.status(400).json({ message: "Unable to create post."});
        }

        res.status(200).json(post);
    }
}