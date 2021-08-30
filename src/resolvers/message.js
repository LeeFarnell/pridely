const { Message } = require("../models");

// send a message
const createMessage = async (_, { fromUser, toUser, message }) => {
  let post = await Message.create({
    fromUser,
    toUser,
    message,
  });

  // we populate the new message with data of the user that is being sent from and the user that it is being sent to
  post = await post.populate("fromUser").populate("toUser").execPopulate();

  return post;
};

module.exports = { createMessage };
