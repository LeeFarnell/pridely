const { User } = require("../models");

// find all followers for current user
const followerData = async (_, { followerId }) => {
  return await User.findById(followerId);
};
module.exports = followerData;
