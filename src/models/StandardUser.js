// importing dependencies
const mongoose = require("mongoose");

// creating a new Schema
const Schema = mongoose.Schema;

const standardUserSchema = {
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
  createdAt: {
    type: Date,
  },
  age: { type: Number },
  gender: { type: String },
  identifyAs: { type: String, enum: ["male", "female", "non-binary"] },
  pronouns: { type: String, enum: ["he/him", "she/her", "they/them"] },
};

const StandardUserSchema = new Schema(standardUserSchema);

const StandardUser = mongoose.model("StandardUser", StandardUserSchema);

module.exports = StandardUser;
