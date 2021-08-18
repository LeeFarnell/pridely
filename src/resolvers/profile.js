const { User } = require("../models");

const profile = async (_, { userId }, context) => {
  const { id } = context.user;

  if (userId) {
    try {
      const user = await User.findById(userId);

      return {
        user: user,
      };
    } catch (error) {
      console.error(error.message);
    }
  } else {
    try {
      const user = await User.findById(id);

      return {
        user: user,
      };
    } catch (error) {
      console.error(error.message);
    }
  }
};

module.exports = profile;
