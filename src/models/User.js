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
    enum: [
      "Animation",
      "Art",
      "Graphic Design",
      "Illustration",
      "Web Design",
      "Event Planning",
      "Music",
      "Photography",
      "Film/Video",
      "Other",
      "Fashion",
      "Crafts",
      "Interior Design",
      "Product Design",
      "Dance",
      "Writing",
      "Hair/Make Up",
    ],
    required: false,
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
  gender: {
    type: String,
    enum: [
      "Male",
      "Female",
      "Non-Binary",
      "Genderqueer",
      "Genderfluid",
      "Omnigender",
      "Agender",
    ],
  },
  identifyAs: {
    type: String,
    enum: [
      "Lesbian",
      "Gay",
      "Bisexual",
      "Trans",
      "Queer",
      "Intersex",
      "Asexual",
      "Pansexual",
      "Straight",
    ],
  },
  pronouns: {
    type: String,
    enum: ["He/Him", "She/Her", "They/Them", "Xe/Xim", "Zi/Zir"],
  },
};

const UserSchema = new Schema(userSchema, {
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
});

UserSchema.pre("save", hashPassword);

UserSchema.methods.validatePassword = validatePassword;

UserSchema.virtual("averageRating").get(function () {
  const sum = this.ratings.reduce((acc, value) => {
    return acc + value;
  }, 0);

  const average = sum / this.ratings.length;

  return average.toFixed(1);
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
