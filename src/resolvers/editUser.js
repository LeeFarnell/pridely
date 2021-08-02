const { User } = require("../models");
const tokenise = require("../utils/tokenise");

const editUser = async (_, { input }) => {
  const {
    name,
    username,
    type,
    country,
    city,
    businessName,
    businessDescription,
    businessType,
    socialMedia,
    age,
    gender,
    identifyAs,
    pronouns,
  } = input;

  const user = await User.findByIdAndUpdate(
    "61082fd546c13a67d0edebfe",
    {
      $set: {
        name,
        username,
        type,
        country,
        city,
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

module.exports = editUser;
