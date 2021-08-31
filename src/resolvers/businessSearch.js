const { User } = require("../models");

// based on the user search it returns an array of users. has multiple cases when either one, two or three arguments are accepted, results being returned based on those arguments
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
