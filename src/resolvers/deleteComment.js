const { PostComment } = require("../models");

// this would delete a comment. currently not used. hardcoded to test in Apollo Sandbox
const deleteComment = async (_, { commentId }, context) => {
  try {
    return await PostComment.deleteOne({ _id: "610861d1dadfdd579ccd3c83" });
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = deleteComment;
