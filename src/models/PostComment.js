// importing dependencies
const mongoose = require("mongoose");

// creating a new Schema
const Schema = mongoose.Schema;

const postCommentSchema = {
  commentPostedBy: {
    type: String,
    required: true,
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

const PostComment = mongoose.model("PostComment", PostCommentSchema);

module.exports = PostComment;
