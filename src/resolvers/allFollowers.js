const { Follower } = require("../models");

const allFollowers = async (_, args, context) => {
  if (context.user) {
    const businessId = context.user.id;

    const followers = await Follower.find({
      businessId,
    })
      .populate("followerId")
      .populate("businessId");

    const peopleIFollow = followers.map((follower) => {
      return follower.followerId;
    });

    return peopleIFollow;
  }
};

module.exports = allFollowers;
