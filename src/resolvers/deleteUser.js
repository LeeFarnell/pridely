const { User } = require("../models");

const deleteUser = async (_, { id }) => {
  return await User.deleteOne({ _id: "6107fb24cb460159b45a7214" });
};

module.exports = deleteUser;