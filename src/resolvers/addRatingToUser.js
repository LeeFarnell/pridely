const { User } = require("../models");

const addRatingToUser = async (_, { input }) => {
  const { ratings } = input;

  const user = await User.findByIdAndUpdate(
    "61142f60c6b60f414467d74b",
    {
      $push: {
        ratings: ratings,
      },
    },
    { new: true }
  );

  return { user };
};

module.exports = addRatingToUser;
