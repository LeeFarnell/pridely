const { User } = require("../models");

// get the currently logged in user
const user = async (_, args, context) => {
  return await User.findById(context.user.id);
};
module.exports = user;
