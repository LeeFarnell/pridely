const { User } = require("../models");

const user = async (_, args, context) => {
  const foundUser = await User.findById("6125119157c05d2e7cff05da");

  console.log(foundUser);

  return foundUser;
};
module.exports = user;
