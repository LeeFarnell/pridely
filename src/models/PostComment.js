// importing dependencies
const mongoose = require("mongoose");

// creating a new Schema
const Schema = mongoose.Schema;

const postCommentSchema = {
  // commentPostedBy: {
  //   type: String,
  //   required: true,
  // },
  commentPostedBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },

  commentText: {
    type: String,
    required: true,
  },
  postId: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
};

const PostCommentSchema = new Schema(postCommentSchema);

// create a model based on the schema
const PostComment = mongoose.model("PostComment", PostCommentSchema);

module.exports = PostComment;
