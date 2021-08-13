// importing dependencies
const mongoose = require("mongoose");

const { hashPassword, validatePassword } = require("../utils/auth");

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
    enum: ["Standard", "Business"],
    required: true,
  },
  email: {
    type: String,
    match: [
      /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
      "Please enter a valid e-mail address",
    ],
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  region: {
    type: String,
    required: true,
  },
  businessName: {
    type: String,
  },
  businessType: {
    // type: Schema.Types.ObjectId,
    // ref: "BusinessType",
    type: String,
    enum: ["Art", "Photography", "Music"],
    required: true,
  },
  businessDescription: {
    type: String,
  },
  socialMedia: {
    type: Array,
  },
  profilePicture: {
    type: String,
    required: true,
  },
  // rating: {
  //   type: Number,
  //   required: false,
  //   default: 0,
  // },
  ratings: {
    type: Array,
    required: false,
  },
  createdAt: {
    type: Date,
  },
  age: { type: Number },
  gender: { type: String, enum: ["male", "female", "non-binary"] },
  identifyAs: { type: String, enum: ["male", "female", "non-binary"] },
  pronouns: { type: String, enum: ["he/him", "she/her", "they/them"] },
};

const UserSchema = new Schema(userSchema);

UserSchema.pre("save", hashPassword);

UserSchema.methods.validatePassword = validatePassword;

const User = mongoose.model("User", UserSchema);

module.exports = User;
