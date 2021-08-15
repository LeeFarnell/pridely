const { Follower } = require("../models");

const allFollowers = async (_, args, context) => {
  const { user } = context;

  return await Follower.find({
    followerId: user.id,
  });
};

module.exports = allFollowers;
