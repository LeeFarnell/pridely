const { Post } = require("../models");

const allPosts = async (_, { userId }) => {
  return await Post.find({ postedBy: userId }).populate("likes");
};

module.exports = allPosts;
