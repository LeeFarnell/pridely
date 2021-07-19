// importing dependencies
const mongoose = require("mongoose");

// creating a new Schema
const Schema = mongoose.Schema;

const ratingSchema = {
  starRating: {
    // not sure on type
    type: String,
    required: true,
  },
  writtenByUser: {
    type: String,
    required: true,
  },
  writtenForBusiness: {
    type: String,
    required: true,
  },
};

const RatingSchema = new Schema(ratingSchema);

const Rating = mongoose.model("Rating", RatingSchema);

module.exports = Rating;
