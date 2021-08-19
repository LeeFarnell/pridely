const { Post } = require("../models");

const allPosts = async (_, { userId }) => {
  return await Post.find({ postedBy: userId });
};

module.exports = allPosts;
