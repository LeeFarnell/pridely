const { Review } = require("../models");

const createReview = async (_, { input }, context) => {
  const { commentBox, serviceUsed, rating, writtenFor } = input;

  const writtenBy = context.user.id;

  try {
    const newReview = await Review.create({
      commentBox,
      serviceUsed,
      rating,
      writtenBy,
      writtenFor,
    });

    return newReview;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = createReview;
