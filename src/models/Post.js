// importing dependencies
const mongoose = require("mongoose");

// creating a new Schema
const Schema = mongoose.Schema;

const postSchema = {
  postedBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
  },
  mainText: {
    type: String,
    required: true,
  },
  image: {
    type: Array,
    minItems: 0,
    maxItems: 4,
  },
  badges: {
    type: String,
    enum: [
      "https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=54&q=80",
      "link.of.badge.two",
    ],
  },
  url: {
    type: String,
  },
  likes: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
      // default: [0],
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
};

const PostSchema = new Schema(postSchema);

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
