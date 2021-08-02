const { User } = require("../models");

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

  return { user };
};

module.exports = signup;
