// importing dependencies
const mongoose = require("mongoose");

// creating a new Schema
const Schema = mongoose.Schema;

const countrySchema = {
  name: {
    type: String,
    required: true,
  },
  unicodeFlag: {
    type: String,
    required: true,
  },
};

const CountrySchema = new Schema(countrySchema);

const Country = mongoose.model("Country", CountrySchema);

module.exports = Country;
