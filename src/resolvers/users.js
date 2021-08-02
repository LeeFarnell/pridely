const { User } = require("../models");

const users = async () => {
  return await User.find({})
    .populate("businessType")
    .populate("country")
    .populate("city");
};

module.exports = users;
