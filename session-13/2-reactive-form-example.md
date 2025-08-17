## Original `HTML`

```html
<div class="container">
  <header>
    <div>
      <div class="title">Movie Form</div>
      <p class="lead">
        Fill in the movie details. Fields marked with
        <span class="req">*</span> are .
      </p>
    </div>
  </header>

  <form aria-label="Movie form">
    <!-- Basic Info -->
    <section class="card">
      <h2>Basic Information</h2>
      <div class="fields">
        <div class="field span-6">
          <label for="name">Name <span class="req">*</span></label>
          <input id="name" name="name" type="text" placeholder="e.g., Inception" />
          <div class="hint">Movie title as shown to users.</div>
        </div>

        <div class="field span-3">
          <label for="language">Language <span class="req">*</span></label>
          <input id="language" name="language" type="text" placeholder="e.g., English" />
        </div>

        <div class="field span-3">
          <label for="releaseYear">Release Year <span class="req">*</span></label>
          <input id="releaseYear" name="releaseYear" type="number" inputmode="numeric" placeholder="e.g., 2010" />
        </div>

        <div class="field span-4">
          <label for="releaseDate">Release Date</label>
          <input id="releaseDate" name="releaseDate" type="date" />
        </div>

        <div class="field span-8">
          <label for="description">Description <span class="req">*</span></label>
          <textarea id="description" name="description" placeholder="Short synopsis..."></textarea>
        </div>
      </div>
    </section>

    <!-- People & Genres -->
    <section class="card">
      <h2>People & Genres</h2>
      <div class="fields">
        <div class="field span-4">
          <label for="directors">Directors <span class="req">*</span></label>
          <input id="directors" name="directors" type="text" placeholder="Comma-separated (e.g., Nolan)" />
          <div class="hint">Use commas to separate multiple names.</div>
        </div>

        <div class="field span-4">
          <label for="actors">Actors <span class="req">*</span></label>
          <input id="actors" name="actors" type="text" placeholder="Comma-separated" />
          <div class="hint">Use commas to separate multiple names.</div>
        </div>

        <div class="field span-4">
          <label for="genres">Genres <span class="req">*</span></label>
          <input id="genres" name="genres" type="text" placeholder="Comma-separated (e.g., Sci-Fi, Thriller)" />
          <div class="hint">List at least one genre.</div>
        </div>
      </div>
    </section>

    <!-- Media & Links -->
    <section class="card">
      <h2>Media</h2>
      <div class="fields">
        <div class="field span-6">
          <label for="coverImage">Cover Image URL <span class="req">*</span></label>
          <input id="coverImage" name="coverImage" type="file" accept="image/*" placeholder="https://example.com/poster.jpg" />
          <div class="hint">Direct link to an image file (JPG/PNG/WebP).</div>
        </div>

        <div class="field span-6">
          <label for="trailerUrl">Trailer URL</label>
          <input id="trailerUrl" name="trailerUrl" type="url" placeholder="https://youtube.com/..." />
        </div>
      </div>
    </section>

    <!-- Metrics & Availability -->
    <section class="card">
      <h2>Metrics</h2>
      <div class="fields">
        <div class="field span-3">
          <label for="duration">Duration (min) <span class="req">*</span></label>
          <input id="duration" name="duration" type="number" placeholder="e.g., 148" />
        </div>

        <div class="field span-3">
          <label for="ratings">Average Rating (0–10)</label>
          <input id="ratings" name="ratings" type="number" placeholder="8.6" />
        </div>

        <div class="field span-3">
          <label for="totalRatings">Total Ratings </label>
          <input id="totalRatings" name="totalRatings" type="number" placeholder="e.g., 12000" />
        </div>

        <div class="field span-3">
          <label for="price">Price ($) <span class="req">*</span></label>
          <input id="price" name="price" type="number" placeholder="e.g., 12.99" />
        </div>

        <div class="field span-4">
          <label for="createdAt">Created At</label>
          <input id="createdAt" name="createdAt" type="datetime-local" />
        </div>

        <div class="field span-4">
          <label for="isAvailable">Availability</label>
          <div class="inline">
            <label class="toggle">
              <input type="checkbox" id="isAvailable" name="isAvailable" />
              <span class="slider"></span>
            </label>

            <span class="hint">Toggle to mark this movie as available.</span>
          </div>
        </div>
      </div>
    </section>

    <div class="actions">
      <button type="reset" class="btn ghost">Clear</button>
      <button type="submit" class="btn primary">Save Movie</button>
    </div>
  </form>
</div>
```

---

## Original `CSS`

```css
/* Container */
.container {
  max-width: 900px;
  margin: 2rem auto;
  padding: 1.5rem;
  font-family: Arial, sans-serif;
  color: #333;
}

/* Header */
header .title {
  font-size: 1.8rem;
  font-weight: bold;
  /* color: #c62828;  */
}

.lead {
  font-size: 0.9rem;
  color: #666;
}

.req {
  color: #c62828;
}

/* Cards (sections) */
.card {
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  margin-top: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.card h2 {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  /* color: #c62828; */
}

/* Fields layout */
.fields {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.field {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.field input,
.field textarea {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  outline: none;
  transition: border-color 0.2s;
}

.field input:focus,
.field textarea:focus {
  border-color: #c62828;
}

.field textarea {
  resize: vertical;
  min-height: 80px;
}

.hint {
  font-size: 0.75rem;
  color: #888;
  margin-top: 0.25rem;
}

/* Actions */
.actions {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1.5rem;
}

.btn {
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-weight: bold;
}

.btn.primary {
  background: #c62828;
  color: #fff;
}

.btn.ghost {
  background: transparent;
  border: 1px solid #c62828;
  color: #c62828;
}

.btn:hover {
  opacity: 0.9;
}

/* Wrapper */
.toggle {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
}

/* Hide the checkbox */
.toggle input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* Slider (track + dot) */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  border-radius: 20px;
  transition: 0.3s;
}

.slider::before {
  content: "";
  position: absolute;
  height: 16px;
  width: 16px;
  left: 2px;
  top: 2px;
  background-color: white;
  border-radius: 50%;
  transition: 0.3s;
}

/* Checked state */
.toggle input:checked + .slider {
  background-color: #c62828;
}

.toggle input:checked + .slider::before {
  transform: translateX(20px);
}

/* Responsive */
@media (max-width: 600px) {
  .fields {
    flex-direction: column;
  }
}
```

---

---

---

## Step 1: Setup Reactive Form

```ts
import { Component, OnInit } from '@angular/core';
import {

FormGroup,
  ReactiveFormsModule,

} from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],    // import

})
export class ReactiveForm implements OnInit {
  movieForm!: FormGroup;

  ngOnInit(): void {
    this.movieForm = new FormGroup({});   
  }
}
```

---

## Step 2: Adding Form Controls

```ts
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: "app-reactive-form",
  imports: [ReactiveFormsModule],
  templateUrl: "./reactive-form.html",
  styleUrl: "./reactive-form.css",
})
export class ReactiveForm implements OnInit {
  movieForm!: FormGroup;

  ngOnInit(): void {
    this.movieForm = new FormGroup({
      // Basic Information
      name: new FormControl(null),
      language: new FormControl(null),
      releaseYear: new FormControl(null),
      releaseDate: new FormControl(null),
      description: new FormControl(null),

      // People & Genres
      directors: new FormControl(null),
      actors: new FormControl(null),
      genres: new FormControl(null),

      // Media
      coverImage: new FormControl(null),
      trailerUrl: new FormControl(null),

      // Metrics
      duration: new FormControl(null),
      ratings: new FormControl(null),
      totalRatings: new FormControl(null),
      price: new FormControl(null),

      // Other
      createdAt: new FormControl(null),
      isAvailable: new FormControl(false),
    });
  }

  onSubmit() {}
}
```

---

## Step 3: Bind the Form to the Component

- **Attach the `FormGroup` to the `<form>` element** using the `[formGroup]` directive.

  ```html
  <form [formGroup]="movieForm" (ngSubmit)="onSubmit()"></form>
  ```

- **Use a submit button** that triggers form submission through `ngSubmit`.

  ```html
  <button type="submit">Submit</button>
  ```

- **Bind each input field** to its corresponding control using the `formControlName` directive.

  ```html
  <input formControlName="name" />
  ```

---

```html
<div class="container">
  <header>
    <div>
      <div class="title">Movie Form</div>
      <p class="lead">
        Fill in the movie details. Fields marked with
        <span class="req">*</span> are .
      </p>
    </div>
  </header>

  <form [formGroup]="movieForm" (ngSubmit)="onSubmit()">
    <!-- Basic Info -->
    <section class="card">
      <h2>Basic Information</h2>
      <div class="fields">
        <div class="field span-6">
          <label for="name">Name <span class="req">*</span></label>
          <input id="name" name="name" type="text" placeholder="e.g., Inception" formControlName="name" />
          <div class="hint">Movie title as shown to users.</div>
        </div>

        <div class="field span-3">
          <label for="language">Language <span class="req">*</span></label>
          <input id="language" name="language" type="text" placeholder="e.g., English" formControlName="language" />
        </div>

        <div class="field span-3">
          <label for="releaseYear">Release Year <span class="req">*</span></label>
          <input id="releaseYear" name="releaseYear" type="number" inputmode="numeric" placeholder="e.g., 2010" formControlName="releaseYear" />
        </div>

        <div class="field span-4">
          <label for="releaseDate">Release Date</label>
          <input id="releaseDate" name="releaseDate" type="date" formControlName="releaseDate" />
        </div>

        <div class="field span-8">
          <label for="description">Description <span class="req">*</span></label>
          <textarea id="description" name="description" placeholder="Short synopsis..." formControlName="description"></textarea>
        </div>
      </div>
    </section>

    <!-- People & Genres -->
    <section class="card">
      <h2>People & Genres</h2>
      <div class="fields">
        <div class="field span-4">
          <label for="directors">Directors <span class="req">*</span></label>
          <input id="directors" name="directors" type="text" placeholder="Comma-separated (e.g., Nolan)" formControlName="directors" />
          <div class="hint">Use commas to separate multiple names.</div>
        </div>

        <div class="field span-4">
          <label for="actors">Actors <span class="req">*</span></label>
          <input id="actors" name="actors" type="text" placeholder="Comma-separated" formControlName="actors" />
          <div class="hint">Use commas to separate multiple names.</div>
        </div>

        <div class="field span-4">
          <label for="genres">Genres <span class="req">*</span></label>
          <input id="genres" name="genres" type="text" placeholder="Comma-separated (e.g., Sci-Fi, Thriller)" formControlName="genres" />
          <div class="hint">List at least one genre.</div>
        </div>
      </div>
    </section>

    <!-- Media & Links -->
    <section class="card">
      <h2>Media</h2>
      <div class="fields">
        <div class="field span-6">
          <label for="coverImage">Cover Image URL <span class="req">*</span></label>
          <input id="coverImage" name="coverImage" type="file" accept="image/*" placeholder="poster.jpg" formControlName="coverImage" />
          <div class="hint">Upload an image file (JPG/PNG/WebP).</div>
        </div>

        <div class="field span-6">
          <label for="trailerUrl">Trailer URL</label>
          <input id="trailerUrl" name="trailerUrl" type="url" placeholder="https://youtube.com/..." formControlName="trailerUrl" />
        </div>
      </div>
    </section>

    <!-- Metrics & Availability -->
    <section class="card">
      <h2>Metrics</h2>
      <div class="fields">
        <div class="field span-3">
          <label for="duration">Duration (min) <span class="req">*</span></label>
          <input id="duration" name="duration" type="number" placeholder="e.g., 148" formControlName="duration" />
        </div>

        <div class="field span-3">
          <label for="ratings">Average Rating (0–10)</label>
          <input id="ratings" name="ratings" type="number" placeholder="8.6" formControlName="ratings" />
        </div>

        <div class="field span-3">
          <label for="totalRatings">Total Ratings </label>
          <input id="totalRatings" name="totalRatings" type="number" placeholder="e.g., 12000" formControlName="totalRatings" />
        </div>

        <div class="field span-3">
          <label for="price">Price ($) <span class="req">*</span></label>
          <input id="price" name="price" type="number" placeholder="e.g., 12.99" formControlName="price" />
        </div>

        <div class="field span-4">
          <label for="createdAt">Created At</label>
          <input id="createdAt" name="createdAt" type="datetime-local" formControlName="createdAt" />
        </div>

        <div class="field span-4">
          <label for="isAvailable">Availability</label>
          <div class="inline">
            <label class="toggle">
              <input type="checkbox" id="isAvailable" name="isAvailable" formControlName="isAvailable" />
              <span class="slider"></span>
            </label>

            <span class="hint">Toggle to mark this movie as available.</span>
          </div>
        </div>
      </div>
    </section>

    <div class="actions">
      <button type="reset" class="btn ghost">Clear</button>
      <button type="submit" class="btn primary">Save Movie</button>
    </div>
  </form>
</div>
```

---

## Step 4: Match Movie Model with backend schema

```ts
export interface Movie {
  _id?: string;
  name: string;
  language: string;
  description: string;
  duration: number;
  ratings?: number;
  totalRatings?: number;
  releaseYear: number;
  releaseDate?: Date;
  createdAt?: Date;
  genres: string[];
  directors: string[];
  coverImage: File;
  trailerUrl?: string;
  actors: string[];
  price: number;
  isAvailable: boolean;
}
```

## Step 5: Add `required` validation

- `Validators.required`
- The all form is `invalid` if at least one `form control` is `invalid`.

```ts
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";

@Component({
  selector: "app-reactive-form",
  imports: [ReactiveFormsModule],
  templateUrl: "./reactive-form.html",
  styleUrl: "./reactive-form.css",
})
export class ReactiveForm implements OnInit {
  movieForm!: FormGroup;

  ngOnInit(): void {
    this.movieForm = new FormGroup({
      // Basic Information
      name: new FormControl(null, Validators.required),
      language: new FormControl(null, Validators.required),
      releaseYear: new FormControl(null, Validators.required),
      releaseDate: new FormControl(null),
      description: new FormControl(null, Validators.required),

      // People & Genres
      directors: new FormControl(null, Validators.required),
      actors: new FormControl(null, Validators.required),
      genres: new FormControl(null, Validators.required),

      // Media
      coverImage: new FormControl(null, Validators.required),
      trailerUrl: new FormControl(null),

      // Metrics
      duration: new FormControl(null, Validators.required),
      ratings: new FormControl(null),
      totalRatings: new FormControl(null),
      price: new FormControl(null, Validators.required),

      // Other
      createdAt: new FormControl(null),
      isAvailable: new FormControl(false),
    });
  }

  onSubmit() {
    console.log(this.movieForm);
  }
}
```

## Step 6: Add Some Validators

```ts
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";

@Component({
  selector: "app-reactive-form",
  imports: [ReactiveFormsModule],
  templateUrl: "./reactive-form.html",
  styleUrl: "./reactive-form.css",
})
export class ReactiveForm implements OnInit {
  movieForm!: FormGroup;

  ngOnInit(): void {
    this.movieForm = new FormGroup({
      // Basic Information
      name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]),
      language: new FormControl(null, Validators.required),
      releaseYear: new FormControl(null, [Validators.required, Validators.min(1900), Validators.max(new Date().getFullYear())]),
      releaseDate: new FormControl(null),
      description: new FormControl(null, Validators.required),

      // People & Genres
      directors: new FormControl(null, Validators.required),
      actors: new FormControl(null, Validators.required),
      genres: new FormControl(null, Validators.required),

      // Media
      coverImage: new FormControl(null, [Validators.required, Validators.pattern(/([^\\s]+(\.(jpg|png|gif|jpeg|webp))$)/i)]),
      trailerUrl: new FormControl(null),

      // Metrics
      duration: new FormControl(null, [Validators.required, Validators.min(1), Validators.max(600)]),
      ratings: new FormControl(null),
      totalRatings: new FormControl(null),
      price: new FormControl(null, [Validators.required, Validators.min(0)]),

      // Other
      createdAt: new FormControl(null),
      isAvailable: new FormControl(false),
    });
  }

  onSubmit() {
    console.log(this.movieForm);
  }
}
```

## Step 7: Add Custom Validator

- Create `validators` folder
- Add `language.validator.ts`

```ts
import { FormControl, ValidationErrors } from "@angular/forms";

const LANGUAGES = ["english", "arabic", "spanish", "french", "hindi", "chinese", "japanese", "korean", "other"];

/*
 enum: ["english", "arabic", "spanish", "french", "hindi", "chinese", "japanese", "korean", "other"],
lowercase: true,
*/

export function languageValidator(control: FormControl): ValidationErrors | null {
  if (!control.value) return null;
  return LANGUAGES.includes(control.value.toLowerCase()) ? null : { invalidLanguage: true };
}
```

```ts

import { languageValidator } from "../validators/language.validator";

language: new FormControl(null, [Validators.required, languageValidator]),

```

---

## Step 8: Form state 

```css
form.ng-invalid .danger {
  background-color: #999;
  cursor: not-allowed;
}

input.ng-invalid.ng-touched {
  border: 1px solid #c62828;
}
```

## Step 9: Show Error Message

1- `submit button`

```html
<button type="submit" class="btn danger">Save Movie</button>
```

```ts
  onSubmit() {
    console.log(this.movieForm);
    if(this.movieForm.invalid){
      this.movieForm.markAllAsTouched();
      return;
    }
  }

```

---

2- `name` form control

```html
<label for="name">Name <span class="req">*</span></label>
<input id="name" name="name" type="text" placeholder="e.g., Inception" formControlName="name" />
<div class="hint">Movie title as shown to users.</div>
@if(movieForm.get('name')?.invalid && movieForm.get('name')?.touched){

<small>*Movie name is required (minimum 3 characters, maximum 100). </small>

}
```

---

3- `language` form control

```html
<label for="language">Language <span class="req">*</span></label>
<input id="language" name="language" type="text" placeholder="e.g., English" formControlName="language" />
@if(movieForm.get('language')?.invalid && movieForm.get('language')?.touched){ @if (movieForm.get('language')?.errors?.['required']) {

<small>* Movie language is required. </small>

} @if(movieForm.get('language')?.errors?.['invalidLanguage']){

<small>* Movie language must be one of: english, arabic, spanish, french, hindi, chinese, japanese, korean, other. </small>

} }
```

---

4- `releaseYear` form control

```ts
currentYear = new Date().getFullYear();
```

```html
<label for="releaseYear">Release Year <span class="req">*</span></label>
<input id="releaseYear" name="releaseYear" type="number" inputmode="numeric" placeholder="e.g., 2010" formControlName="releaseYear" />

@if (movieForm.get('releaseYear')?.invalid && movieForm.get('releaseYear')?.touched) {

<small> *Release Year must be between 1900 and {{ currentYear }} </small>

}
```

---

5- `directors` form control

```html
<label for="directors">Directors <span class="req">*</span></label>
<input id="directors" name="directors" type="text" placeholder="Comma-separated (e.g., Nolan)" formControlName="directors" />
<div class="hint">Use commas to separate multiple names.</div>
@if(movieForm.get('directors')?.invalid && movieForm.get('directors')?.touched){

<small>*Directors are required.</small>

}
```

---

6- `actors` form control

```html
<label for="actors">Actors <span class="req">*</span></label>
<input id="actors" name="actors" type="text" placeholder="Comma-separated" formControlName="actors" />
<div class="hint">Use commas to separate multiple names.</div>
@if(movieForm.get('actors')?.invalid && movieForm.get('actors')?.touched){

<small>*Actors are required.</small>

}
```

---

7- `genres` form control

```html
<label for="genres">Genres <span class="req">*</span></label>
<input id="genres" name="genres" type="text" placeholder="Comma-separated (e.g., Sci-Fi, Thriller)" formControlName="genres" />
<div class="hint">List at least one genre.</div>
@if(movieForm.get('genres')?.invalid && movieForm.get('genres')?.touched){

<small>*Genres are required.</small>

}
```

---

8- `coverImage` form control

```html
<label for="coverImage">Cover Image URL <span class="req">*</span></label>
<input id="coverImage" name="coverImage" type="file" accept="image/*" placeholder="poster.jpg" formControlName="coverImage" />
<div class="hint">Upload an image file (JPG/JPEG/GIF/PNG/WebP).</div>
@if(movieForm.get('coverImage')?.invalid && movieForm.get('coverImage')?.touched){ @if (movieForm.get('coverImage')?.errors?.['required']) {

<small>* Movie cover image is required. </small>

} @if(movieForm.get('coverImage')?.errors?.['pattern']){

<small>* Movie cover image must be one of those types: JPG, JPEG, GIF, PNG, WebP. </small>

} }
```

---

9- `duration` form control

```html
<label for="duration">Duration (min) <span class="req">*</span></label>
<input id="duration" name="duration" type="number" placeholder="e.g., 148" formControlName="duration" />

@if (movieForm.get('duration')?.invalid && movieForm.get('duration')?.touched) {
<small>*Movie duration must be value between (1) minute to (600) minute.</small>
}
```

---

10- `price` form control

```html
<label for="price">Price ($) <span class="req">*</span></label>
<input id="price" name="price" type="number" placeholder="e.g., 12.99" formControlName="price" />
@if (movieForm.get('price')?.invalid && movieForm.get('price')?.touched) {
<small>*Movie price must be value greater than 0.</small>
}
```

---

## SetValue()

```html
<button type="button" (click)="setMovie()">Set Movie</button>
```

```ts
setMovie() {
    this.movieForm.setValue({
      name: 'The Hidden Sword',
      language: 'Chinese',
      description: 'A story of honor and revenge set in 1930s China.',
      duration: 124,
      ratings: 3.9,
      totalRatings: 874,
      releaseYear: 2017,
      releaseDate: '2017-09-05',
      genres: ['Drama', 'War'],
      directors: ['Xu Haofeng'],
      coverImage: null,
      trailerUrl: 'https://youtube.com/example-hidden-sword',
      actors: ['Xu Qing', 'Zhang Aoyue'],
      price: 6.0,
      isAvailable: true,
      createdAt: new Date().toISOString().slice(0, 16)
    });
  }


```

---

## patchValue()

```html
<button type="button" (click)="patchMovie()">Patch Movie</button>
```

```ts
patchMovie() {
    this.movieForm.patchValue({
      name: 'The Hidden Sword',
      language: 'Chinese',
      trailerUrl: 'https://youtube.com/example-hidden-sword',
      actors: ['Xu Qing', 'Zhang Aoyue'],
      price: 6.0,
      isAvailable: true,
      createdAt: new Date().toISOString().slice(0, 16)
    });
  }


```

---
