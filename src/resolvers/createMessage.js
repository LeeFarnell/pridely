const { Message } = require("../models");

const createMessage = async (_, { input }, context) => {
  const { title, message } = input;

  try {
    const newMessage = Message.create({ title, message });

    return newMessage;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = createMessage;
