const { Post } = require("../models");

const deletePost = async (_, { postId }, context) => {
  console.log(postId);
  return await Post.deleteOne({ _id: "6107fb24cb460159b45a721e" });
};

module.exports = deletePost;
