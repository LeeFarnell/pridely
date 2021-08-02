const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET || "mysupersecretsecret";
const EXP_TIME = process.env.EXP_TIME || "2h";

const tokenise = (payload) => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: EXP_TIME });
};

module.exports = tokenise;
