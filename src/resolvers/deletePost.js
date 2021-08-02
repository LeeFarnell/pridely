const { Post } = require("../models");

const deletePost = async () => {
  return await Post.deleteOne({ _id: "6107fb24cb460159b45a721e" });
};

module.exports = deletePost;
