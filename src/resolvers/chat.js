const { Message } = require("../models");

const chat = async (_, { fromUserId, toUserId }) => {
  // Brings back messaging history between 2 different user
  const messages = await Message.find({
    $or: [
      { fromUser: fromUserId, toUser: toUserId },
      { fromUser: toUserId, toUser: fromUserId },
    ],
  })
    .populate("fromUser")
    .populate("toUser");
  return messages;
};

module.exports = chat;
