const { Review } = require("../models");

// returns all of the reviews for a specified user, user id comes from input
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
