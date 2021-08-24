const { Follower } = require("../models");

const allFollowers = async (_, args, context) => {
  const followerId = context.user.id;

  const followers = await Follower.find({
    followerId,
  }).populate("businessId");

  const peopleIFollow = followers.map((follower) => {
    return follower.businessId;
  });

  return peopleIFollow;
};

module.exports = allFollowers;
