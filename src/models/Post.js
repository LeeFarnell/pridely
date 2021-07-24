// importing dependencies
const mongoose = require("mongoose");

// creating a new Schema
const Schema = mongoose.Schema;

const postSchema = {
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  mainText: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  badges: {
    type: String,
    enum: ["link.of.badge.one", "link.of.badge.two"],
  },
  url: {
    type: String,
  },
  likes: {
    type: Number,
    default: 0,
  },
  comments: {
    type: Schema.Types.ObjectId,
    ref: "PostComment",
  },
  postedBy: {
    type: Schema.Types.ObjectId,
    ref: "BusinessUser",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
};

const PostSchema = new Schema(postSchema);

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
