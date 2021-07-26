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
  categories: {
    type: Schema.Types.ObjectId,
    ref: "ReviewCategory",
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

const Review = mongoose.model("Review", ReviewSchema);

module.exports = Review;
