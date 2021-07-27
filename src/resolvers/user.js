const { User } = require("../models");

const users = async () => {
  return await User.findById("60fffac1d9dd2739c86c6814").populate(
    "businessType"
  );
};
module.exports = users;
