const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

const { DB_URL, MONGOOSE_OPTIONS } = require("./config/config");
const logger = require("./middleware/logger");

// assigning a port
const PORT = process.env.PORT || 3000;

// creating express application
const app = express();

// middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(logger);

// this function will run the server
const init = async () => {
  try {
    app.listen(PORT, () =>
      console.info(`\nServer running on http://localhost:${PORT}\n`)
    );

    mongoose.connect(DB_URL, MONGOOSE_OPTIONS);
  } catch (error) {
    console.info(error);
    console.error("Failed to connect to DB");
  }
};

init();
