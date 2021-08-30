// importing dependencies
const mongoose = require("mongoose");

// creating a new Schema
const Schema = mongoose.Schema;

const followerSchema = {
  // for people that follow me
  businessId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  // for people I follow
  followerId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
};

const FollowerSchema = new Schema(followerSchema);

// create a model based on the schema
const Follower = mongoose.model("Follower", FollowerSchema);

module.exports = Follower;
