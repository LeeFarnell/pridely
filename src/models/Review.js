// importing dependencies
const mongoose = require("mongoose");

// creating a new Schema
const Schema = mongoose.Schema;

const reviewSchema = {
  commentBox: {
    type: String,
    required: true,
  },
  serviceUsed: {
    type: String,
    enum: ["Service One", "Service Two", "Service Three"],
    required: true,
  },
  rating: {
    type: String,
    default: 0,
  },
  writtenBy: {
    type: String,
    required: true,
  },
  writtenFor: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
};

const ReviewSchema = new Schema(reviewSchema);

// create a model based on the schema
const Review = mongoose.model("Review", ReviewSchema);

module.exports = Review;
