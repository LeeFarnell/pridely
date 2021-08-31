const { User } = require("../models");
const tokenise = require("../utils/tokenise");

// this would allow to edit a user data. Currently unused, hardcoded to test in Apollo Sandbox
const editUser = async (_, { input }) => {
  const {
    name,
    username,
    type,
    country,
    region,
    businessName,
    businessDescription,
    businessType,
    socialMedia,
    age,
    gender,
    identifyAs,
    pronouns,
  } = input;

  try {
    const user = await User.findByIdAndUpdate(
      "61082fd546c13a67d0edebfe",
      {
        $set: {
          name,
          username,
          type,
          country,
          region,
          businessName,
          businessDescription,
          businessType,
          socialMedia,
          age,
          gender,
          identifyAs,
          pronouns,
        },
      },
      { new: true }
    );

    // tokenise the new data
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
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = editUser;
