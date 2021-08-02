const { User } = require("../models");

const users = async () => {
  return await User.findById("6107fb24cb460159b45a7215")
    .populate("businessType")
    .populate("country")
    .populate("city");
};
module.exports = users;
