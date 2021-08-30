const { User } = require("../models");

// this would delete a user. currently not used. hardcoded to test in Apollo Sandbox
const deleteUser = async (_, { userId }, context) => {
  try {
    return await User.deleteOne({ _id: "6107fb24cb460159b45a7214" });
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = deleteUser;
