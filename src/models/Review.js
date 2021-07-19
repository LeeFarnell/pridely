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
    enum: ["Service One", "Service Two"],
    required: true,
  },
  // not sure what this is
  serviceType: {
    type: String,
  },
  writtenBy: {
    type: String,
    required: true,
  },
  writtenFor: {
    type: String,
    required: true,
  },
};

const ReviewSchema = new Schema(reviewSchema);

const Review = mongoose.model("Review", ReviewSchema);

module.exports = Review;
