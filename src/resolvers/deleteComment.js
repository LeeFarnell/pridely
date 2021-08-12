const { PostComment } = require("../models");

const deleteComment = async (_, { commentId }, context) => {
  console.log(commentId);
  return await PostComment.deleteOne({ _id: "610861d1dadfdd579ccd3c83" });
};

module.exports = deleteComment;
