## Enabling Router in Standalone Apps

- configure routing using `provideRouter` in `providers` array in `app.config.ts`.

```ts
import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from "@angular/core";
import { provideRouter } from "@angular/router";

import { routes } from "./app.routes";
import { provideHttpClient } from "@angular/common/http";

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes), // Here

    provideHttpClient(),
  ],
};
```

## Creating Components

```bash
ng g c header
ng g c footer
ng g c home
ng g c about
ng g c contact
ng g c movies
ng g c sign-in
ng g c sign-up
ng g c not-found
```

## Define Routes in `app.routes.ts`

- **`path`** → The URL segment the user navigates to.
- **`component`** → The component that should be displayed when the path matches.
- **`redirectTo`** → Redirects the user to another route (requires `pathMatch`).
- **`pathMatch`**: \* `full` → The whole URL must match exactly (important for the default route).
- `prefix` → Matches if the beginning of the URL fits (this is the default).
- **`wildcard ( ** )`\*\* → Catches any undefined route. It must always be the last route

```ts
import { Routes } from "@angular/router";
import { Home } from "./home/home";
import { About } from "./about/about";
import { Contact } from "./contact/contact";
import { Movies } from "./movies/movies";
import { SignIn } from "./sign-in/sign-in";
import { SignUp } from "./sign-up/sign-up";
import { NotFound } from "./not-found/not-found";

export const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" }, // default route
  { path: "home", component: Home },
  { path: "about", component: About },
  { path: "contact", component: Contact },
  { path: "movies", component: Movies },
  { path: "signin", component: SignIn },
  { path: "signup", component: SignUp },
  { path: "**", component: NotFound }, // wildcard
];
```

## Display Routes with `RouterOutlet`

- Import **`RouterOutlet`** in your root component (`app.ts`) or any component where you want routed content to appear.
- **`RouterOutlet`** is a directive that works as a placeholder. Angular replaces it with the component that corresponds to the current route.

```ts
import { Component, signal } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { Header } from "./header/header";
import { Footer } from "./footer/footer";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, Header, Footer],
  templateUrl: "./app.html",
  styleUrl: "./app.css",
})
export class App {}
```

- In `app.html`, place the `<router-outlet>` tag where you want the routed content to render:

```html
<app-header></app-header> 
<router-outlet></router-outlet> <!-- Angular loads the active route's component here -->
<app-footer></app-footer>
```

---

## Add Page Titles with Routes

- Angular allows you to set the **browser tab title** directly in your route configuration using the `title` property.
- The `title` value is applied automatically when navigating to that route.
- This helps improve **user experience** and also supports **SEO** for your application.

```ts
import { Routes } from "@angular/router";
import { Home } from "./home/home";
import { About } from "./about/about";
import { Contact } from "./contact/contact";
import { Movies } from "./movies/movies";
import { SignIn } from "./sign-in/sign-in";
import { SignUp } from "./sign-up/sign-up";
import { NotFound } from "./not-found/not-found";

export const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: Home, title: "Home" },
  { path: "about", component: About, title: "About" },
  { path: "contact", component: Contact, title: "Contact" },
  { path: "movies", component: Movies, title: "Movies" },
  { path: "signin", component: SignIn, title: "Sign In" },
  { path: "signup", component: SignUp, title: "Sign Up" },
  { path: "**", component: NotFound, title: "Not Found" },
];
```

---

## Configuring Navigation Links [Using `RouterLink`]

- In Angular, you should not use standard anchor tags with href because they reload the entire page.
- Instead, use the **`RouterLink` directive**, which tells Angular’s router to load the correct component **without a full page refresh**.

### 🚫 Old (Wrong) Way – Using `href` This will reload the page each time:

```html
<header class="site-header">
  <div class="container header-row">
    <div class="brand">
      <a>My Site</a>
    </div>

    <nav class="nav">
      <a href="home">Home</a>
      <a href="about">About</a>
      <a href="contact">Contact</a>
      <a href="movies">Movies</a>

      <a href="signin">Sign In</a>
      <a href="signup">Sign Up</a>
    </nav>
  </div>
</header>
```

### ✅ Correct Way – Using `RouterLink`

This keeps your app as a **Single Page Application (SPA)** and loads components dynamically inside `<router-outlet>`:

```html
<header class="site-header">
  <div class="container header-row">
    <div class="brand">
      <a>My Site</a>
    </div>

    <nav class="nav">
      <a routerLink="/home">Home</a>
      <a routerLink="/about">About</a>
      <a routerLink="/contact">Contact</a>
      <a routerLink="/movies">Movies</a>

      <a routerLink="/signin">Sign In</a>
      <a routerLink="/signup">Sign Up</a>
    </nav>
  </div>
</header>
```

### Header Component (TypeScript)

Make sure to import `RouterLink` so Angular recognizes the directive:

```ts
import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-header",
  imports: [RouterLink], // import
  templateUrl: "./header.html",
  styleUrl: "./header.css",
})
export class Header {}
```

## Active Link Highlighting

- Angular provides the **`routerLinkActive` directive** to add a CSS class when a route is active.

```html
<header class="site-header">
  <div class="container header-row">
    <div class="brand">
      <a>My Site</a>
    </div>

    <nav class="nav">
      <a routerLink="/home" routerLinkActive="active">Home</a>
      <a routerLink="/about" routerLinkActive="active">About</a>
      <a routerLink="/contact" routerLinkActive="active">Contact</a>
      <a routerLink="/movies" routerLinkActive="active">Movies</a>

      <a routerLink="/signin" routerLinkActive="active">Sign In</a>
      <a routerLink="/signup" routerLinkActive="active">Sign Up</a>
    </nav>
  </div>
</header>
```

---

```css
.active {
  font-weight: bold;
}
```

---

```ts
import { Component } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: "app-header",
  imports: [RouterLink, RouterLinkActive], // import
  templateUrl: "./header.html",
  styleUrl: "./header.css",
})
export class Header {}
```

### problem

- Multiple Links Active When using `routerLink=""` for Home, Angular treats it as a **prefix match**, so both Home and other links (like `/about`) can appear active.

```html
<header class="site-header">
  <div class="container header-row">
    <div class="brand">
      <a>My Site</a>
    </div>

    <nav class="nav">
      <!-- routerLink = "" -->
      <a routerLink="" routerLinkActive="active">Home</a>
      <a routerLink="/about" routerLinkActive="active">About</a>
      <a routerLink="/contact" routerLinkActive="active">Contact</a>
      <a routerLink="/movies" routerLinkActive="active">Movies</a>

      <a routerLink="/signin" routerLinkActive="active">Sign In</a>
      <a routerLink="/signup" routerLinkActive="active">Sign Up</a>
    </nav>
  </div>
</header>
```

#### ✅ Solution

- Exact Match with `routerLinkActiveOptions`

```html
<header class="site-header">
  <div class="container header-row">
    <div class="brand">
      <a>My Site</a>
    </div>

    <nav class="nav">
      <a routerLink="" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a>
      <a routerLink="/about" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">About</a>
      <a routerLink="/contact" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Contact</a>
      <a routerLink="/movies" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Movies</a>

      <a routerLink="/signin" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Sign In</a>
      <a routerLink="/signup" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Sign Up</a>
    </nav>
  </div>
</header>
```

---

## Programmatic navigation to routes

- While `RouterLink` handles **declarative navigation** in templates, Angular provides **programmatic navigation** when you need to navigate based on logic (e.g., after login, button clicks, or conditional checks).

- By injecting the `Router` service, you can navigate dynamically in your TypeScript code.

### 1\. Using `router.navigate()`

- Accepts an array of path segments.
- Useful when you want to build paths dynamically.

-- `app.routes`

```ts
    {path: 'admin/addmovie', component: AddMovie, title: 'Add Movie'}
```

-- `SignIn` Component

```ts
import { Component, inject } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-sign-in",
  imports: [],
  templateUrl: "./sign-in.html",
  styleUrl: "./sign-in.css",
})
export class SignIn {
  private router = inject(Router);
  onSubmit() {
    this.router.navigate(["admin","addmovie"]); // navigate with array
  }
}
```

---

### 2\. Using `router.navigateByUrl()`

- Accepts the full path as a string.
- Simpler if you already know the exact route.

```ts
onSubmit() {
  this.router.navigateByUrl('admin/addmovie');  // navigate with string
}
```

---

## **Read Route State with `ActivatedRoute`**

Angular provides the **`ActivatedRoute`** service (from `@angular/router`) to access information about the **current route** such as URL, route parameters, query parameters, and static data.

---

### **Common Properties**

| Property      | Details                                                                 |
| ------------- | ----------------------------------------------------------------------- |
| `url`         | An Observable of the current route URL segments.                        |
| `params`      | An Observable of the route parameters (e.g., `:id` from `/movies/:id`). |
| `queryParams` | An Observable of query string parameters (e.g., `?page=1&sort=asc`).    |
| `data`        | An Observable of static or resolved data defined in the route config.   |

---

### **Route Snapshots**

- A **snapshot** represents the route state at a single point in time.
- Unlike Observables, snapshots **do not update** when the route changes.

---

### Example

**`movie-service`**

```ts
 getMovies(page: number = 1, limit: number = 5): Observable<Movie[]> {
    return this.http.get<any>(`${this.URL}?page=${page}&limit=${limit}`).pipe(map(response=> response.data.movies))
  }
```

**`movies.html`**

```html
<section>
  <h1 style="color: var(--primary)">Movies</h1>
  <div class="movie-grid">
    @for(movie of movies; track movie._id ){

    <article class="movie-card">
      <h3>{{ movie.name }}</h3>
      <p class="muted">{{ movie.description }}</p>
      <button type="button" (click)="goToMovieDetails(movie._id)">Details</button>
    </article>
    }
  </div>
</section>
```

---

**`movies.ts`**

```ts
import { Component, inject, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MovieService } from "../services/movie";
import { Movie } from "../models/movie";

@Component({
  selector: "app-movies",
  imports: [],
  templateUrl: "./movies.html",
  styleUrl: "./movies.css",
})
export class Movies implements OnInit {
  movies: Movie[] = [];
  private movieService = inject(MovieService);

  private router = inject(Router);

  ngOnInit(): void {
    this.movieService.getMovies().subscribe({
      next: (data) => {
        this.movies = data;
      },
    });
  }

  goToMovieDetails(id: string | undefined) {
    this.router.navigate(["movies", id]);
  }
}
```

**`movie-service.ts`**

```ts
  getMovieById(id: string | null): Observable<Movie> {
    return this.http.get<any>(`${this.URL}/${id}`).pipe(map(response=> response.data.movie))
  }
```

- Create `movie-details` component.
```bash
ng g c movie-details
```

- **`app.routes.ts`**

```ts
{ path: 'movies/:id', component: MovieDetails, title: 'Movie Details' }
```

**`movie-details.ts`**

```ts
import { Component, inject, OnInit } from "@angular/core";
import { Movie } from "../models/movie";
import { ActivatedRoute } from "@angular/router";
import { MovieService } from "../services/movie";

@Component({
  selector: "app-movie-details",
  imports: [],
  templateUrl: "./movie-details.html",
  styleUrl: "./movie-details.css",
})
export class MovieDetails implements OnInit {
  movie!: Movie;

  movieId: string | null;

  private route = inject(ActivatedRoute);

  private movieService = inject(MovieService);

  constructor() {
    this.movieId = this.route.snapshot.paramMap.get("id");
  }

  ngOnInit(): void {
    this.movieService.getMovieById(this.movieId).subscribe({
      next: (data) => {
        this.movie = data;
      },
    });
  }
}
```

---

**`movie-details.html`**

```html
<section class="movie-details">
  <!-- Cover Image -->
  <div class="cover">
    <img src="'http://localhost:4200/uploads/movies' + movie.coverImage" alt="Movie Cover" />
  </div>

  <!-- Movie Info -->
  <div class="info">
    <h1>{{ movie.name }}</h1>
    <p class="muted">{{ movie.language }} • {{ movie.releaseYear }} • {{ movie.duration }} min</p>

    <p class="description">{{ movie.description }}</p>

    <!-- Ratings -->
    <div class="ratings"><strong>⭐ {{ movie.ratings || 0 }}</strong> ({{ movie.totalRatings || 0 }} ratings)</div>

    <!-- Genres -->
    <div class="genres">
      @for (g of movie.genres; track $index) {
      <span>{{ g }}</span>
      }
    </div>

    <!-- Directors -->
    <p><strong>Directors:</strong> {{ movie.directors.join(', ') }}</p>

    <!-- Actors -->
    <p><strong>Actors:</strong> {{ movie.actors.join(', ') }}</p>

    <!-- Trailer -->
    @if (movie.trailerUrl) {
    <div class="trailer">
      <iframe [src]="movie.trailerUrl"></iframe>
    </div>
    }
    <!-- Price & Availability -->
    <div class="buy">
      <span class="price">\${{ movie.price }}</span>
      <button [disabled]="!movie.isAvailable">{{ movie.isAvailable ? 'Buy Ticket' : 'Not Available' }}</button>
    </div>
  </div>
</section>
```

---

## Nesting routes with `child` routes

- Sometimes a route has its own sub-routes.
- Instead of repeating `"admin"` in every path, you can group related routes inside a **parent route** using `children`.
- The parent component (`Admin`) must include a `<router-outlet>` where child components will be rendered.

#### Create `Admin` and `AdminDashboard` components

---

### 1. `Admin` Component

```ts
import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-admin",
  imports: [RouterOutlet], // import RouterOutlet to render child views
  templateUrl: "./admin.html",
  styleUrl: "./admin.css",
})
export class Admin {}
```

---

### 2. `admin.html`

```html
<!-- Child routes will be displayed here -->
<router-outlet></router-outlet>
```

---

### 3. `app.routes.ts`

```ts
{
  path: 'admin',
  component: Admin,
  title: 'Admin',
  children: [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },  // default child
    {
      path: 'dashboard',
      component: AdminDashboard,
      title: 'Admin Dashboard',
    },
    {
      path: 'addMovie',
      component: AddMovie,
      title: 'Add Movie',
    },
  ],
}
```

---

### 4. `Admin Dashboard`

**HTML**

```html
<h2>Admin Dashboard</h2>
<button (click)="navigateToAddMovie()">Add Movie</button>
```

**Component**

```ts
import { Component, inject } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-admin-dashboard",
  templateUrl: "./admin-dashboard.html",
  styleUrl: "./admin-dashboard.css",
})
export class AdminDashboard {
  private router = inject(Router);

  navigateToAddMovie() {
    // Since addMovie is a child of admin, you can navigate like this:
    this.router.navigate(["admin", "addMovie"]);
    // OR: this.router.navigateByUrl('/admin/addMovie');
  }
}
```

---

✅ **Now**:

- Visiting `/admin` → redirects to `/admin/dashboard`.
- Clicking the button on the dashboard → navigates to `/admin/addMovie`.
- All child views (`dashboard`, `addMovie`) are rendered inside `<router-outlet>` of the `Admin` component.

---

## **Route Guard in Angular**

Angular route guards let you control whether users can **navigate to, from, or even load** a route based on specific conditions.

### ✅ Why use Route Guards?

- Restrict users from accessing certain routes (authentication/authorization).
- Ask users to confirm or save changes before leaving a page (e.g., unsaved forms).
- Validate route parameters before navigating.
- Prefetch or resolve data before displaying a route.

---

### 🔑 Types of Route Guards

#### **1. CanActivate**

Determines whether a user can **activate** a route.
👉 Most commonly used for **auth checks**.

```ts
canActivate: [() => inject(AuthService).isAuthenticated()];
```

---

#### **2. CanActivateChild**

Determines whether a user can access **child routes** of a parent.
👉 Useful for protecting an entire **admin section**.

```ts
canActivateChild: [() => inject(AuthService).isAdmin()];
```

---

#### **3. CanDeactivate**

Checks if a user can **leave** a route.
👉 Prevents leaving when forms have unsaved changes.

```ts
canDeactivate: [(component: FormComponent) => !component.hasUnsavedChanges()];
```

---

#### **4. CanMatch**

Determines whether a route should be **matched** during navigation.
👉 Useful for **feature flags, A/B testing, or conditional routes**.

```ts
canMatch: [() => inject(FeatureService).isFeatureEnabled("newDashboard")];
```

---

#### **5. CanLoad**

Controls whether a **lazy-loaded module** should be downloaded.
👉 Saves performance by blocking load if user is unauthorized.

```ts
canLoad: [() => inject(AuthService).hasRole("admin")];
```

---

#### **6. Resolve**

Prefetches data **before route activation**, ensuring the component has data ready.
👉 Often used for detail pages (e.g., movie details, user profile).

```ts
resolve: {
  movie: () => inject(MovieService).getMovie();
}
```

---

### ⚡ Route Guard Return Types

All guards can return different values to control navigation:

| Return Type                     | Description                                                                                 |
| ------------------------------- | ------------------------------------------------------------------------------------------- |
| `boolean`                       | `true` = allow, `false` = block (except **CanMatch**, where `false` just skips that route). |
| `UrlTree` / `RedirectCommand`   | Redirect to another route.                                                                  |
| `Promise<T>` or `Observable<T>` | Async result; router waits for the first emitted value.                                     |

---

### 1\. `CanActivate` — Protecting the Admin Section 
**Why It’s Used:** Prevent access to the `admin` route unless the user is authenticated (has a valid token). 

1- **Create Guard**
- Guard saved in `guards` folder with name `auth`.

```bash
ng generate guard guards/auth
```

2- **`guards/auth.guard.ts`**

```ts
import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { Auth } from "../services/auth";

export const authGuard: CanActivateFn = (route, state) => {
  const user = inject(Auth).user.value;

  return user?.token ? true : inject(Router).createUrlTree(["/signin"]);
};
```

3- **`app.routes.ts`**

```ts
{
    path: 'admin',
    component: Admin,
    title: 'Admin',
    canActivate: [authGuard],  // use Guard
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        component: AdminDashboard,
        title: 'Admin',
      },
      {
        path: 'addMovie',
        component: AddMovie,
        title: 'Add Movie',
      },
    ],
  }
```


--- 
### 2\. `CanActivateChild` — Guarding Admin’s Sub-Routes 
**Why It’s Used:** Ensures child routes (like `dashboard`, `addMovie`) remain protected—even after initial navigation into `/admin`.

1- **create guard**

```bash
ng g g guards/admin-child
```

2- **`guards/admin-child.guard.ts`**

```ts
import { inject } from "@angular/core";
import { CanActivateChildFn, Router } from "@angular/router";
import { Auth } from "../services/auth";

export const adminChildGuard: CanActivateChildFn = (childRoute, state) => {
  const user = inject(Auth).user.value;

  return user?.token ? true : inject(Router).createUrlTree(["/signin"]);
};
```

3- **`app.routes.ts`**

```ts
  {
    path: 'admin',
    component: Admin,
    title: 'Admin',
    canActivate: [authGuard],
    canActivateChild: [adminChildGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        component: AdminDashboard,
        title: 'Admin',
      },
      {
        path: 'addMovie',
        component: AddMovie,
        title: 'Add Movie',
      },
    ],
  },
```

---

### 3\. `CanDeactivate` — Handling Unsaved Changes 
**Why It’s Used:** Prevents users from leaving the `AddMovie` page without confirming if there are unsaved changes.

1- **create guard**

```bash
ng g g guards/unsaved-changes
```

2- **create interface** 

```ts
// models/can-component-deactivate.interface.ts
export interface CanComponentDeactivate {
  hasUnsavedChanges: boolean;
}
```

3- **`guards/unsaved-changes.guard.ts`**
```ts
import { CanDeactivateFn } from "@angular/router";
import { CanComponentDeactivate } from "../models/can-component-deactivate.interface";

export const unsavedChangesGuard: CanDeactivateFn<CanComponentDeactivate> = (component, currentRoute, currentState, nextState) => {
  return component.hasUnsavedChanges ? window.confirm("Discard changes?") : true;
};
```

4- Implement interface **`add-movie.ts`** component

```ts
import { CanComponentDeactivate } from "../guards/can-component-deactivate.interface";
// ...
export class AddMovieComponent implements CanComponentDeactivate {
  hasUnsavedChanges = true;
  // ...
}
```

5-** `app.routes.ts`**

```ts
{
  path: 'addMovie',
  component: AddMovie,
  title: 'Add Movie',
  canDeactivate: [unsavedChangesGuard],
}
```
