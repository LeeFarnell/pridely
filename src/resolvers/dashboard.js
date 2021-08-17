const { User } = require("../models");

const dashboard = async (_, { userId }, context) => {
  const user = await User.findById(userId);

  return {
    currentUser: user,
  };
};

module.exports = dashboard;
