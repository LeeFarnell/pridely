const { AuthenticationError } = require("apollo-server");

const { User } = require("../models");
const tokenise = require("../utils/tokenise");

const signup = async (_, { input }) => {
  const {
    name,
    username,
    type,
    email,
    password,
    country,
    city,
    businessName,
    businessType,
    socialMedia,
    age,
    gender,
    identifyAs,
    pronouns,
  } = input;

  const user = await User.create({
    name,
    username,
    type,
    email,
    password,
    country,
    city,
    businessName,
    businessType,
    socialMedia,
    age,
    gender,
    identifyAs,
    pronouns,
  });

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

module.exports = signup;
