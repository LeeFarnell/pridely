const { User } = require("../models");

const editBusinessUser = async (_, { input }, context) => {
  const { businessName, businessType, businessDescription, socialMedia } =
    input;

  const user = await User.findByIdAndUpdate(
    "6116b82778d56945acff72e1",
    {
      $set: { businessName, businessType, businessDescription, socialMedia },
    },
    { new: true }
  );

  return { user };
};

module.exports = editBusinessUser;
