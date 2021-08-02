const Auth = require("./Auth");
const Mutation = require("./Mutation");
const Query = require("./Query");
const User = require("./User");

const typeDefs = [Query, User, Auth, Mutation];

module.exports = typeDefs;
