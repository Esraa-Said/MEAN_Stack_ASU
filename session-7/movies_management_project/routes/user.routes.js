const express = require("express");
const userControllers = require("../controllers/user.controllers");
const router = express.Router();

const {uploadUser} = require("../middleware/upload.middleware");

const multerErrorHandler = require("../middleware/multer.error.handler");

router.post("/signup",uploadUser.single("photo"), multerErrorHandler, userControllers.signup);

router.route("/login").post(userControllers.login);

router.post(
  "/add-fav",
  userControllers.protectRoutes,
  userControllers.addMovieToFav
);
module.exports = router;
