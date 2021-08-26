const { Post } = require("../models");

// returns all posts for the specified user
const allPosts = async (_, { userId }) => {
  try {
    return await Post.find({ postedBy: userId })
      .populate("likes")
      .populate("postedBy");
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = allPosts;
