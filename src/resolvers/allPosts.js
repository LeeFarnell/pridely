const { Post } = require("../models");

const allPosts = async () => {
  return await Post.find({});
};

module.exports = allPosts;
