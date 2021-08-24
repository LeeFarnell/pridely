const { Message } = require("../models");

const createMessage = async (_, { fromUser, toUser, message }) => {
  let post = await Message.create({
    fromUser,
    toUser,
    message,
  });

  post = await post.populate("fromUser").populate("toUser").execPopulate();

  return post;
};

module.exports = { createMessage };
