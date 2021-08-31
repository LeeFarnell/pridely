const { User } = require("../models");

// return all users from our db. currently unused
const users = async () => {
  return await User.find({}).populate("businessType");
};

module.exports = users;
