const { Message } = require("../models");

const getMessages = async () => {
  try {
    const messages = await Message.find({
      targetedUser: "61143752b7c60c3f200e16ed",
      currentUser: "61143752b7c60c3f200e16ee",
    });

    return messages;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = getMessages;
// TODO: current and targeted users are hardcoded, at a later stage get the current user from the context and the targeted user from somewhere else (event maybe?)
