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
  type: {
    type: String,
    enum: ["standard", "business"],
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
  rating: {
    type: Number,
    required: false,
    default: 0,
  },
  ratings: {
    type: Number,
    required: false,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  age: { type: Number },
  gender: { type: String },
  identifyAs: { type: String, enum: ["a", "b", "c"] },
  pronouns: { type: String, enum: ["aa", "bb", "cc"] },
  posts: {
    type: Schema.Types.ObjectId,
    ref: "Post",
  },
  reviews: {
    type: Schema.Types.ObjectId,
    ref: "Review",
  },
  followers: {
    type: Schema.Types.ObjectId,
    ref: "Follower",
  },
};

const BusinessUserSchema = new Schema(businessUserSchema);

const BusinessUser = mongoose.model("BusinessUser", BusinessUserSchema);

module.exports = BusinessUser;
