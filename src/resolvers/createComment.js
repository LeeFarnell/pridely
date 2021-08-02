const { PostComment } = require("../models");

const createComment = async (_, { input }) => {
  const { commentPostedBy, postId, commentText, createdAt } = input;

  return await PostComment.create({
    commentPostedBy,
    postId,
    commentText,
    createdAt,
  });
};

module.exports = createComment;
