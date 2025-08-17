const express = require("express");
const path = require("path");

const movieRouter = require("./routes/movie.routes");
const userRouter = require("./routes/user.routes");

const cors = require("cors");

const connectDB = require("./config/db");

const app = express();

app.use(cors({ origin: "http://localhost:4200" }));

require("dotenv").config();
app.use("/uploads/users", express.static(path.join(__dirname, "uploads/users")));
app.use("/uploads/movies", express.static(path.join(__dirname, "uploads/movies")));
connectDB();
app.use(express.json());

app.use("/movies", movieRouter);
app.use("/users", userRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is Listening on port ${PORT}`);
});
