// importing dependencies
const mongoose = require("mongoose");

// creating a new Schema
const Schema = mongoose.Schema;

const userSchema = {
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
  city: {
    type: Schema.Types.ObjectId,
    // required: true,
  },
  country: {
    type: Schema.Types.ObjectId,
    // required: true,
  },
  businessName: {
    type: String,
    required: true,
  },
  // businessType: {
  //   type: Schema.Types.ObjectId,
  //   ref: "BusinessType",
  // },
  businessDescription: {
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

const UserSchema = new Schema(userSchema);

const User = mongoose.model("User", UserSchema);

module.exports = User;
