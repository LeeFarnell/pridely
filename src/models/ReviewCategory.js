// importing dependencies
const mongoose = require("mongoose");

// creating a new Schema
const Schema = mongoose.Schema;

const reviewCategorySchema = [
  {
    cultureAndValues: {
      type: Number,
      enum: [0, 1, 2, 3, 4, 5],
      default: 0,
    },
    diversityAndInclusion: {
      type: Number,
      enum: [0, 1, 2, 3, 4, 5],
      default: 0,
    },
  },
];

const ReviewCategorySchema = new Schema(reviewCategorySchema);

const ReviewCategory = mongoose.model("ReviewCategory", ReviewCategorySchema);

module.exports = ReviewCategory;
