const { Message } = require("../models");

const deleteMessages = async (_, args, context) => {
  console.log(args);

  try {
    return await Message.deleteMany({
      targetedUser: "61143752b7c60c3f200e16ed",
      currentUser: "61143752b7c60c3f200e16ee",
    });
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = deleteMessages;
