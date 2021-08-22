const { User } = require("../models");

const addRatingToUser = async (_, { input }) => {
  const { ratings, userId } = input;

  try {
    const user = await User.findByIdAndUpdate(
      { _id: userId },
      {
        $push: {
          ratings: ratings,
        },
      },
      { new: true }
    );

    return { user };
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = addRatingToUser;
