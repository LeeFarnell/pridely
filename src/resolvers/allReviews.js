const { Review } = require("../models");

const getReviews = async () => {
  try {
    const reviews = await Review.find({
      writtenFor: "611586550b349642f23ca9a4",
    });

    return reviews;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = getReviews;
// TODO: current and targeted users are hardcoded, at a later stage get the current user from the context and the targeted user from somewhere else (event maybe?)
