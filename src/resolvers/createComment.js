const { PostComment } = require("../models");

const createComment = async (_, { input }, context) => {
  const { id } = context.user;
  const { postId, commentText } = input;

  return await PostComment.create({
    commentPostedBy: id,
    postId,
    commentText,
  });
};

module.exports = createComment;
