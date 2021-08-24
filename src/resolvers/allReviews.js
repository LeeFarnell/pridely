const { Review } = require("../models");

const getReviews = async (_, { userId }, context) => {
  try {
    const reviews = await Review.find({
      writtenFor: userId,
    });

    return reviews;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = getReviews;
