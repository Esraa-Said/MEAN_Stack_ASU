const express = require("express");
const movieRouter = require("./routes/movie.routes");
const connectDB = require("./config/db");

const app = express();
const PORT = 5000;

app.use(express.json());

app.use("/movies", movieRouter);

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server is Listening on port ${PORT}`);
    });
  } catch (err) {
    console.error("Failed to connect to DB", err.message);
    process.exit(1);
  }
};

startServer();
