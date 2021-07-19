// importing dependencies
const mongoose = require("mongoose");

// creating a new Schema
const Schema = mongoose.Schema;

const likeSchema = {
  likedBy: {
    type: String,
    required: true,
  },
  postLiked: {
    type: String,
    required: true,
  },
};

const LikeSchema = new Schema(likeSchema);

const Like = mongoose.model("Like", LikeSchema);

module.exports = Like;
