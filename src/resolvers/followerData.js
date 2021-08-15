const { User } = require("../models");

const followerData = async (_, { followerId }) => {
  return await User.findById(followerId);
};
module.exports = followerData;
