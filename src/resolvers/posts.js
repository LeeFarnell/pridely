const { Post } = require("../models");

const posts = async () => {
  return await Post.find({});
};

module.exports = posts;
