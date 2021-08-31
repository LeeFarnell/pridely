const { PostComment } = require("../models");

// creates and stores a comment in DB
const createComment = async (_, { input }, context) => {
  // current user id comes from context, post id and comment text come from the input
  const { id } = context.user;
  const { postId, commentText } = input;

  return await PostComment.create({
    commentPostedBy: id,
    postId,
    commentText,
  });
};

module.exports = createComment;
