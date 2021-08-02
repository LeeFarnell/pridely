const { PostComment } = require("../models");

const deleteComment = async () => {
  return await PostComment.deleteOne({ _id: "610861d1dadfdd579ccd3c83" });
};

module.exports = deleteComment;
