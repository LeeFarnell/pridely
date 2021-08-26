const { User } = require("../models");

const editBusinessUser = async (_, { input }, context) => {
  const {
    businessName,
    businessType,
    businessDescription,
    calendlyUsername,
    socialMedia,
  } = input;

  const user = await User.findByIdAndUpdate(
    { _id: context.user.id },
    {
      $set: {
        businessName,
        businessType,
        businessDescription,
        calendlyUsername,
        socialMedia,
      },
    },
    { new: true }
  );

  return { user };
};

module.exports = editBusinessUser;
