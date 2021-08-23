// importing dependencies
const mongoose = require("mongoose");

// creating a new Schema
const Schema = mongoose.Schema;

const followerSchema = {
  businessId: {
    type: String,
    required: true,
  },
  followerId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
};

const FollowerSchema = new Schema(followerSchema);

const Follower = mongoose.model("Follower", FollowerSchema);

module.exports = Follower;
