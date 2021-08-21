const { User } = require("../models");

const dashboard = async (_, args, context) => {
  const { id } = context.user;
  try {
    const user = await User.findById(id);

    return {
      currentUser: user,
    };
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = dashboard;
