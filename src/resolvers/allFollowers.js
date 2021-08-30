const { Follower } = require("../models");

// gets the current user id from the context
const allFollowers = async (_, args, context) => {
  if (context.user) {
    const businessId = context.user.id;

    // finds all of the followers where businessId is the same as de id from the context
    const followers = await Follower.find({
      businessId,
    })
      .populate("followerId")
      .populate("businessId");

    // maps through the array of results, collects and returns only the followerId
    const peopleIFollow = followers.map((follower) => {
      return follower.followerId;
    });

    return peopleIFollow;
  }
};

module.exports = allFollowers;
