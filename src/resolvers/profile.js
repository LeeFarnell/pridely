const { User } = require("../models");

const profile = async (_, { userId }) => {
  try {
    const user = await User.findById(userId);

    return {
      user: user,
    };
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = profile;
