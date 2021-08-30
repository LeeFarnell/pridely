const { PostComment } = require("../models");

// this will target a specific comment and update its content. Currently unused, hardcoded to test in Apollo playground.
const editComment = async (_, { input }) => {
  const { commentText } = input;

  try {
    return await PostComment.findByIdAndUpdate(
      "610862f5c5bea93e58d74526",
      { $set: { commentText } },
      { new: true }
    );
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = editComment;
