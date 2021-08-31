const { Post } = require("../models");

// this would delete a post. currently not used. hardcoded to test in Apollo Sandbox
const deletePost = async (_, { postId }, context) => {
  try {
    return await Post.deleteOne({ _id: "6107fb24cb460159b45a721e" }).populate(
      "likes"
    );
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = deletePost;
