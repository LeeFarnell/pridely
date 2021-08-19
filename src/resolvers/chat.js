const { Message } = require("../models");

const chat = async (_, { userId }) => {
  if (userId) {
    const messages = await Message.find({
      $or: [{ fromUser: userId }, { toUser: userId }],
    })
      .populate("fromUser")
      .populate("toUser");
    return messages;
  }

  const messages = await Message.find({})
    .populate("fromUser")
    .populate("toUser");
  return messages;
};

module.exports = chat;
