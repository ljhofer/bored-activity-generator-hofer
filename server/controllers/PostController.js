const { Post } = require("../models");


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
    },

    async getPostById(req, res) {
        const post = await Post.findOne({ _id: req.params.id});

        if (!post) {
            return res.status(400).json({ message: "No post with that ID found."});
        }

        res.status(200).json(post);
    },

    async updatePost(req, res) {
        const post = await Post.findOneAndUpdate({ _id: req.params.id}, req.body);

        if (!post) {
            return res.status(400).json({ message: "Unable to update post."});
        }

        res.status(200).json(post);
    },

    async deletePost(req, res) {
        try {
            const post = await Post.findById(req.params.id);

            if (post.userId === req.body.userId) {
                await Post.deleteOne();
                res.status(200).json("The post has been deleted.");
            } else {
                res.status(403).json("You can only delete your own posts.");
            }
        } catch (err) {
            res.status(500).json(err);
        }
    }
}