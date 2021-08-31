const bcrypt = require("bcrypt");

// function to hasb the password
const hashPassword = async function (next) {
  if (this.isNew || this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
};

// function to validate the password
const validatePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

module.exports = {
  hashPassword,
  validatePassword,
};
