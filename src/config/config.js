// database name
const DB_NAME = process.env.DB_NAME || "pridely_db";

// database url
const DB_URL = process.env.MONGODB_URI || `mongodb://localhost/${DB_NAME}`;

// options to connect to the db with
const MONGOOSE_OPTIONS = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useCreateIndex: true,
};

module.exports = {
  DB_URL,
  MONGOOSE_OPTIONS,
};
