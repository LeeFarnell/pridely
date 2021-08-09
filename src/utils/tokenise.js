const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET || "mysupersecretsecret";
const EXP_TIME = process.env.EXP_TIME || "2h";

// created token with payload
const tokenise = (payload) => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: EXP_TIME });
};

// we check the token for the secret and the age to make sure it is not expired
const verifyToken = (token) => {
  return jwt.verify(token, secret, { maxAge: expiresIn });
};

module.exports = { tokenise, verifyToken };
