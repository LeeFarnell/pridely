const { User } = require("../models");

const businessSearch = async (_, { businessType, country, region }) => {
  if (!region && !country) {
    return await User.find({ businessType });
  } else if (!region) {
    return await User.find({ businessType, country });
  } else if ((businessType, country, region)) {
    return await User.find({ businessType, country, region });
  }
};

module.exports = businessSearch;
