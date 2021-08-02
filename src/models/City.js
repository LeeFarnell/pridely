// importing dependencies
const mongoose = require("mongoose");

// creating a new Schema
const Schema = mongoose.Schema;

const citySchema = {
  name: {
    type: String,
    required: true,
  },
};

const CitySchema = new Schema(citySchema);

const City = mongoose.model("City", CitySchema);

module.exports = City;
