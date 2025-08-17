## 📂 Backend Project Structure

```plaintext
project/
├── controllers/
│   ├── movie.controller.js
│   └── user.controller.js
├── middleware/
│   ├── multer.error.handler.js
│   └── upload.middleware.js
├── models/
│   ├── movie.model.js
│   └── user.model.js
├── routes/
│   ├── movie.routes.js
│   └── user.routes.js
├── uploads/
│   ├── movies/
│   └── users/
└── server.js
```

---

## 🛠 Middleware: `middleware/upload.middleware.js`

Handles file uploads for user and movie entities using Multer.

```javascript
const multer = require("multer");
const path = require("path");

// User image storage configuration
const userStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/users");
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `user-${Date.now()}.${ext}`);
  },
});

// Movie cover image storage configuration
const movieStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/movies");
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `movie-${Date.now()}.${ext}`);
  },
});

// File filter to allow only images
const fileFilter = (req, file, cb) => {
  const isImage = file.mimetype.startsWith("image/");
  if (isImage) {
    cb(null, true);
  } else {
    cb(new Error("Only image files are allowed!"), false);
  }
};

// Multer upload instances
const uploadUser = multer({ storage: userStorage, fileFilter });
const uploadMovie = multer({ storage: movieStorage, fileFilter });

module.exports = { uploadUser, uploadMovie };
```

---

## 🎬 Controller: `controllers/movie.controller.js`

Handles movie-related operations, including creating a new movie with an uploaded cover image.

```javascript
const createMovie = async (req, res) => {
  try {
    const movieData = {
      ...req.body,
    };

    // Only add coverImage if a file was uploaded
    if (req.file) {
      movieData.coverImage = req.file.filename;
    }

    const movie = await Movie.create(movieData);

    res.status(201).json({
      status: "success",
      data: { movie },
    });
  } catch (error) {
    // Only try to delete file if it exists
    if (req.file) {
      try {
        fs.unlinkSync(
          path.join(__dirname, "..", "uploads", "movies", req.file.filename)
        );
      } catch (unlinkErr) {
        console.error("Failed to delete uploaded file:", unlinkErr.message);
      }
    }

    res.status(400).json({ status: "fail", message: error.message });
  }
};
```

---

## 🎬 Routes: `routes/movie.routes.js`

Defines the route for creating a new movie, utilizing the upload middleware.

```javascript
const express = require("express");
const { uploadMovie } = require("../middleware/upload.middleware");
const movieControllers = require("../controllers/movie.controller");
const multerErrorHandler = require("../middleware/multer.error.handler");

const router = express.Router();

// Route to create a new movie
router.post("/movies", uploadMovie.single("coverImage"), multerErrorHandler, movieControllers.createMovie);

module.exports = router;
```
## 🎬 Routes: `routes/user.routes.js`

Defines the route for creating a new movie, utilizing the upload middleware.

```javascript
const express = require("express");
const userControllers = require("../controllers/user.controllers");
const router = express.Router();

const {uploadUser} = require("../middleware/upload.middleware");
const multerErrorHandler = require("../middleware/multer.error.handler");

router.post("/signup",uploadUser.single("photo"), multerErrorHandler, userControllers.signup);
```

---

## 🧭 Server Setup: `server.js`

Sets up the Express server and serves static files from the uploads directory.

```javascript
// Serve static files for user and movie uploads
app.use("/uploads/users", express.static(path.join(__dirname, "uploads/users")));
app.use("/uploads/movies", express.static(path.join(__dirname, "uploads/movies")));
```

---

## 📄 Frontend: File Input in HTML

HTML input element for selecting a cover image file.

```html
<input id="coverImage" name="coverImage" type="file" accept="image/*" formControlName="coverImage" (change)="onFileSelected($event)" />
```

---

## 🧠 Component: Handling File Selection

TypeScript method to handle file selection and store the selected file.

```typescript
selectedFile : File | null = null;
onFileSelected(event: Event) {
  const input = event.target as HTMLInputElement;
  if (input?.files?.length) {
    this.selectedFile = input.files[0];
    
  }
}
```

---

## 📤 Collecting Form Data

Method to collect form data, including the selected file, into a `FormData` object.

```typescript
onSubmit() {
  if (this.movieForm.invalid) {
    this.movieForm.markAllAsTouched();
    return;
  }

  const formData = new FormData();
  Object.keys(this.movieForm.value).forEach((key) => {
    if (key !== "coverImage") {
      formData.append(key, this.movieForm.value[key]);
    }
  });

  if (this.selectedFile) {
    formData.append("coverImage", this.selectedFile);
  }

  this.movieService.addMovie(formData).subscribe({
    next: (movie) => {
      console.log("Movie added:", movie);
       this.movieForm.reset();
      this.selectedFile = null;

    },
    error: (err) => {
      console.error("Error adding movie:", err);
    },
  });
}
```

---

## 📡 Sending Data to Backend

Service method to send the `FormData` to the backend.

```typescript
addMovie(formData: FormData): Observable<Movie> {
  return this.http.post<{ data: { movie: Movie } }>(this.URL, formData).pipe(
    map((response) => response.data.movie)
  );
}
```
