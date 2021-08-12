const { Message } = require("../models");

const createMessage = async (_, { input }, context) => {
  const { title, message } = input;
  const targetedUser = "61143752b7c60c3f200e16ed";
  const currentUser = "61143752b7c60c3f200e16ee";
  console.log(title, message);

  try {
    const newMessage = await Message.create({
      title,
      message,
      targetedUser,
      currentUser,
    });

    return { newMessage };
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = createMessage;
