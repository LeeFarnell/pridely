const { AuthenticationError } = require("apollo-server");

const { User } = require("../models");
const { tokenise } = require("../utils/tokenise");

const signup = async (_, { input }) => {
  // we destructure required information from the input
  const {
    name,
    username,
    type,
    email,
    password,
    country,
    region,
    profilePicture,
    age,
    gender,
    identifyAs,
    pronouns,
  } = input;

  // we check database for existing users with same credentials
  const userAlreadyExists = await User.findOne({ email });

  // if the credentials are new we create the user story in our database
  if (!userAlreadyExists) {
    const user = await User.create({
      name,
      username,
      type,
      email,
      password,
      country,
      region,
      profilePicture,
      age,
      gender,
      identifyAs,
      pronouns,
    });

    // if the user can not be created an error will be thrown
    if (!user) {
      throw new AuthenticationError(
        "There was an error! We could not create a user with these credentials!"
      );
    }

    // if the user was successfully, we tokenise user information that we need
    const token = tokenise({
      id: user.id,
      username: user.username,
      type: user.type,
      email: user.email,
      country: user.country,
      region: user.region,
      createdAt: user.createdAt,
    });

    // we return the token and user
    return { token, user };
  } else {
    throw new AuthenticationError(
      "There is already a user with these credentials!"
    );
  }
};

module.exports = signup;
