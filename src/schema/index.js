const Auth = require("./Auth");
const Mutation = require("./Mutation");
const Query = require("./Query");
const User = require("./User");
const Post = require("./Post");

const typeDefs = [Query, User, Post, Auth, Mutation];

module.exports = typeDefs;
