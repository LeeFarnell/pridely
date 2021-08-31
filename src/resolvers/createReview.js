const { Review, User } = require("../models");

const createReview = async (_, { input }, context) => {
  // get the review data from input
  const { commentBox, serviceUsed, rating, writtenFor } = input;

  // get the current user from context
  const writtenBy = context.user.id;

  // create the review
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

  // update the user model with the new review value (for average rating)
  try {
    const updatedReviewForUser = await User.findOneAndUpdate(
      { _id: writtenFor },
      {
        $push: { ratings: rating },
      },
      { new: true, runValidators: true }
    );

    return updatedReviewForUser;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = createReview;
