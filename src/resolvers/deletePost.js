const { Post } = require("../models");

const deletePost = async (_, { postId }, context) => {
  return await Post.deleteOne({ _id: "6107fb24cb460159b45a721e" }).populate(
    "likes"
  );
};

module.exports = deletePost;
