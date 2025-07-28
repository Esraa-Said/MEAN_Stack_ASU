const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://test:bRA6e6eeuMoXWNV7@cluster0.uoedbx4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
      { dbName: "Movies" }
    );
    console.log(`Database Connection Successfully`);
  } catch (error) {
    console.log(`Error in Connection with Database. ${error}`);
  }
};

module.exports = connectDB;
