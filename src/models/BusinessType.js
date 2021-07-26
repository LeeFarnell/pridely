// importing dependencies
const mongoose = require("mongoose");

// creating a new Schema
const Schema = mongoose.Schema;

const businessTypeSchema = {
  businesses: [
    {
      name: {
        type: String,
        required: true,
      },
    },
  ],
};

const BusinessTypeSchema = new Schema(businessTypeSchema);

const BusinessType = mongoose.model("BusinessType", BusinessTypeSchema);

module.exports = BusinessType;
