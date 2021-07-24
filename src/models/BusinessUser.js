// importing dependencies
const mongoose = require("mongoose");

// creating a new Schema
const Schema = mongoose.Schema;

const businessUserSchema = {
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ["standard", "business"],
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  businessName: {
    type: String,
    required: true,
  },
  businessType: {
    type: String,
    enum: ["Type 1", "Type 2", "Type 3"],
    required: true,
  },
  businessDescription: {
    type: String,
    required: true,
  },
  businessId: {
    type: String,
    required: true,
  },
  socialMedia: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: false,
    default: 0,
  },
  ratings: {
    type: Number,
    required: false,
    default: 0,
  },
  createdAt: {
    type: Date,
  },
  age: { type: Number },
  gender: { type: String },
  identifyAs: { type: String, enum: ["male", "female", "non-binary"] },
  pronouns: { type: String, enum: ["he/him", "she/her", "they/them"] },
};

const BusinessUserSchema = new Schema(businessUserSchema);

const BusinessUser = mongoose.model("BusinessUser", BusinessUserSchema);

module.exports = BusinessUser;
