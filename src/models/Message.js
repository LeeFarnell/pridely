// importing dependencies
const mongoose = require("mongoose");

// creating a new Schema
const Schema = mongoose.Schema;

const messageSchema = {
  title: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  currentUser: {
    type: String,
    required: true,
  },
  targetedUser: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
};

const MessageSchema = new Schema(messageSchema);

const Message = mongoose.model("Message", MessageSchema);

module.exports = Message;
