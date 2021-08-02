const { Post } = require("../models");

const post = async () => {
  return await Post.findById("6107fb24cb460159b45a7219");
};
module.exports = post;
