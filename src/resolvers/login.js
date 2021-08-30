const { AuthenticationError } = require("apollo-server");

const { User } = require("../models");
const { tokenise } = require("../utils/tokenise");

// performs the login functionality
const login = async (_, { input }) => {
  const { email, password } = input;

  // finds a user by email
  const user = await User.findOne({ email });

  // if theres is no user or if the password does not match the email, an error is thrown
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

  // tokenise the information of the current user and return user and token
  const token = tokenise({
    id: user.id,
    username: user.username,
    type: user.type,
    email: user.email,
    country: user.country,
    region: user.region,
    createdAt: user.createdAt,
  });

  return { token, user };
};

module.exports = login;
