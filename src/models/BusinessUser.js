// importing dependencies
const mongoose = require("mongoose");

// creating a new Schema
const Schema = mongoose.Schema;

const businessUserSchema = {
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  businessName: {
    type: String,
    required: true,
  },
  businessType: {
    type: String,
    enum: ["first type", "second type"],
    required: true,
  },
  businessDescription: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  businessId: {
    type: Number,
    required: true,
  },
  socialMedia: {
    type: String,
    required: true,
  },
  myPosts: [{ body: "Post", by: mongoose.Schema.Types.ObjectId }],
  myReviews: [{ body: "Review", by: mongoose.Schema.Types.ObjectId }],
  myRatings: [{ body: "Rating", by: mongoose.Schema.Types.ObjectId }],
  age: { type: Number },
  gender: { type: String },
  identifyAs: { type: String, enum: ["a", "b", "c"] },
  pronouns: { type: String, enum: ["aa", "bb", "cc"] },
};

const BusinessUserSchema = new Schema(businessUserSchema);

const BusinessUser = mongoose.model("BusinessUser", BusinessUserSchema);

module.exports = BusinessUser;
