const { PostComment } = require("../models");

const editComment = async (_, { input }) => {
  const { commentText } = input;

  return await PostComment.findByIdAndUpdate(
    "610862f5c5bea93e58d74526",
    { $set: { commentText } },
    { new: true }
  );
};

module.exports = editComment;
