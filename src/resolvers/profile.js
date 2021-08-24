const { User, Follower } = require("../models");

const profile = async (_, { userId }) => {
  try {
    const user = await User.findById(userId);

    const followerId = userId;

    const followers = await Follower.find({
      followerId,
    }).populate("businessId");

    const peopleIFollow = followers.map((follower) => {
      return follower.businessId;
    });

    return {
      user: user,
      myFollowers: peopleIFollow,
    };
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = profile;
