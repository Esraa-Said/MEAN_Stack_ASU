const express = require("express");
const movieControllers = require("../controllers/movie.controllers");

const userControllers = require("../controllers/user.controllers");

const {uploadMovie} = require("../middleware/upload.middleware");
const multerErrorHandler = require("../middleware/multer.error.handler")

const router = express.Router();

router
  .route("/")
  .post(uploadMovie.single('coverImage'), multerErrorHandler,  movieControllers.createMovie)
  .get( movieControllers.getAllMovies);
router
  .route("/:id")
  .get(movieControllers.getMovieById)
  .patch(movieControllers.updateMovieById)
  .delete(movieControllers.deleteMovieById);

module.exports = router;
