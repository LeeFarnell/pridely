const { Follower } = require("../models");

// follow a user.
const followUser = async (_, { userId }, context) => {
  const followerId = userId;
  const businessId = context.user.id;

  try {
    return await Follower.create({
      followerId,
      businessId,
    });
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = followUser;
