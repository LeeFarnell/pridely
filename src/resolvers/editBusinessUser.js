const { User } = require("../models");

// this is used to upgrade a standard user to a business user.
// currently only used when signup as a business user as part of a mandatory two-stage process
const editBusinessUser = async (_, { input }, context) => {
  // data from input
  const {
    businessName,
    businessType,
    businessDescription,
    calendlyUsername,
    socialMedia,
  } = input;

  try {
    // find the user by the id in context and update with specified data from input
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
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = editBusinessUser;
