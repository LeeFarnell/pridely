const { User } = require("../models");

const users = async () => {
  return await User.find({}).populate("businessType");
};

module.exports = users;
