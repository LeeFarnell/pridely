const { AuthenticationError } = require("apollo-server");

const { User } = require("../models");
const { tokenise } = require("../utils/tokenise");

const login = async (_, { input }) => {
  const { email, password } = input;

  const user = await User.findOne({ email });

  if (!user) {
    throw new AuthenticationError(
      "User does not exist! Please check your credentials and try again!"
    );
  }

  const isValidPassword = await user.validatePassword(password);

  if (!isValidPassword) {
    throw new AuthenticationError(
      "Password does not match to this account. Please try typing your password again."
    );
  }

  const token = tokenise({
    id: user.id,
    username: user.username,
    type: user.type,
    email: user.email,
    country: user.country,
    city: user.city,
    createdAt: user.createdAt,
  });

  return { token, user };
};

module.exports = login;
