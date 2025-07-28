const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "connection string",
      { dbName: "Movies" }
    );
    console.log(`Database Connection Successfully`);
  } catch (error) {
    console.log(`Error in Connection with Database. ${error}`);
  }
};

module.exports = connectDB;
