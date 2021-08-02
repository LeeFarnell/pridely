const { User } = require("../models");
const tokenise = require("../utils/tokenise");

const editUser = async (_, { userId, input }) => {
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
    "6107fb24cb460159b45a7214",
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

  console.log(user);

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
