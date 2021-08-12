const { Review } = require("../models");

const createReview = async (_, { input }, context) => {
  const { commentBox, serviceUsed, rating } = input;

  const writtenBy = "611586550b349642f23ca9a6";
  const writtenFor = "611586550b349642f23ca9a4";

  return await Review.create({
    commentBox,
    serviceUsed,
    rating,
    writtenBy,
    writtenFor,
  });
};

module.exports = createReview;
