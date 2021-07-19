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
  comments: [{ body: "PostComments", by: mongoose.Schema.Types.ObjectId }],
  likes: [{ body: "Likes", by: mongoose.Schema.Types.ObjectId }],
  url: {
    type: String,
  },
  postedBy: { type: mongoose.Schema.Types.ObjectId, ref: "BusinessUser" },
  badges: { type: String, enum: ["link.of.badge.one", "link.of.badge.two"] },
};

const PostSchema = new Schema(postSchema);

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
