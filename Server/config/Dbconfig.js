const mongoose = require("mongoose");

const MONGODB_URI =
  "mongodb://127.0.0.1:27017/Ecom_Project?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.1.3"; // Replace with your MongoDB connection URI

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("connected", () => {
  console.log("Connected to MongoDB");
});

db.on("error", (err) => {
  console.error(`MongoDB connection error: ${err}`);
});

module.exports = mongoose;
