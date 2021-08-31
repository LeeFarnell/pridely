const { User, Follower } = require("../models");

// profile resulver
const profile = async (_, { userId }) => {
  try {
    // find the current user and all of its followers
    const user = await User.findById(userId);

    const followerId = userId;

    const followers = await Follower.find({
      followerId,
    }).populate("businessId");

    // iterate through the followers array and return an array of follower ids
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
