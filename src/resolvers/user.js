const { User } = require("../models");

const user = async (_, args, context) => {
  return await User.findById(context.user.id);
};
module.exports = user;
