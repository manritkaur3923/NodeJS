const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb://localhost:27017/authSetUp",
    );
    console.log("Database Connected");
  } catch (error) {
    console.error("Error connecting DB", error);
  }
}; 
module.exports = connectDB;
