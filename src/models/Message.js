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
  fromUser: {
    type: String,
    required: true,
  },
  toUser: {
    type: String,
    required: true,
  },
};

const MessageSchema = new Schema(messageSchema);

const Message = mongoose.model("Message", MessageSchema);

module.exports = Message;
