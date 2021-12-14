const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: {
        type: String
    },
    review: {
        type: String
    },
    postedBy: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    postedOn: {
        type: Date,
        default: Date.now,
    },
    comments:[
        {
          type: Schema.Types.ObjectId,
          ref: 'Comment'
        }
    ],
}, 
{ 
  timestamps: true
}
);


const Post = mongoose.model("Post", PostSchema);

module.exports = Post;