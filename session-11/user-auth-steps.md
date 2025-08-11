# Angular JWT Authentication

## This document explains **step-by-step** how the authentication works.

## 1️⃣ Auth Service – Logging in a user

```ts
import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { catchError, map, throwError } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class Auth {
  private http = inject(HttpClient);
  private URL = "http://localhost:5000/users/login";

  login(email: string, password: string) {
    return this.http.post<any>(this.URL, { email, password }).pipe(
      map((response) => response.token),
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    let errorResponse = {
      status: "fail",
      message: "An unknown error has occurred",
    };

    if (error.error && error.error.status && error.error.message) {
      errorResponse = {
        status: error.error.status,
        message: error.error.message,
      };
    }

    return throwError(() => errorResponse);
  }
}
```

**What this code does as a whole:**

- Sends a `POST` request to the backend with `email` and `password`.
- If successful, extracts the `token` from the backend response using `map`.
- If an error occurs, `catchError` handles it and sends back a friendly error object.

---

## 2️⃣ Using Auth Service in a Login Component

```html
<button type="button" (click)="onLogin()">Login</button>
```

```ts
import { Component, inject } from "@angular/core";
import { Auth } from "../services/auth";

@Component({
  selector: "app-login",
  imports: [],
  templateUrl: "./login.html",
  styleUrl: "./login.css",
})
export class Login {
  private authService = inject(Auth);

  onLogin(email: string = "frnt@gmail.com", password: string = "12345678") {
    this.authService.login(email, password).subscribe({
      next: (token) => {
        console.log(token);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
```

**What this code does as a whole:**

- Injects the `Auth` service.
- Calls `login()` with default credentials when the button is clicked.
- Prints the token to the console if login is successful, or logs the error if not.

---

## 3️⃣ UserModel – Storing and validating tokens

- create class `UserModel` in `models` folder.

```ts
export class UserModel {
  constructor(
    public email: string,
    public id: string,
    private _token: string,
    private _expiresIn: Date
  ) {}

  get token(): string | null {
    if (!this._expiresIn || this._expiresIn < new Date()) {
      return null;
    }
    return this._token;
  }
}
```

**What this code does as a whole:**

- Represents the logged-in user’s data.
- Stores the token privately (`_token`) and only returns it if it hasn’t expired (via the `get token()` method).
- Prevents sending expired tokens to the backend.

---

## 4️⃣ Auth Service with BehaviorSubject and jwt-decode

- npm install jwt-decode

```ts
import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { catchError, map, BehaviorSubject, throwError } from "rxjs";
import { UserModel } from "../models/user";
import { jwtDecode } from "jwt-decode";

@Injectable({
  providedIn: "root",
})
export class Auth {
  private http = inject(HttpClient);
  private URL = "http://localhost:5000/users/login";

  user = new BehaviorSubject<UserModel | null>(null);

  login(email: string, password: string) {
    return this.http.post<any>(this.URL, { email, password }).pipe(
      map((response) => {
        if (response.token) {
          const decoded = jwtDecode<any>(response.token);
          const expirationDate = new Date(decoded.exp * 1000);

          const loggedInUser = new UserModel(
            decoded.email,
            decoded.id,
            response.token,
            expirationDate
          );

          this.user.next(loggedInUser);
          return response.data.user;
        } else {
          throw new Error("Token not found in response");
        }
      }),
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    let errorResponse = {
      status: "fail",
      message: "An unknown error has occurred",
    };

    if (error.error && error.error.status && error.error.message) {
      errorResponse = {
        status: error.error.status,
        message: error.error.message,
      };
    }

    return throwError(() => errorResponse);
  }
}
```

**Key concepts explained:**

- **`BehaviorSubject`**: An RxJS subject that always stores the _latest_ value and emits it to new subscribers immediately. This is perfect for storing the current logged-in user state across the app.
- **`jwtDecode`**: Decodes the JWT token to extract user data and expiration time.
- **`this.user.next(...)`**: Updates the `BehaviorSubject` so all components listening to it get the new user data.

---

## 5️⃣ User Service – Adding a movie to favorites

- create `user-service` in `services` folder

```ts
import { inject, Injectable } from "@angular/core";
import { Auth } from "./auth";
import { exhaustMap, map, Observable, take } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { UserModel } from "../models/user";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private authService = inject(Auth);
  private http = inject(HttpClient);
  private URL = "http://localhost:5000/users";

  addMovieToFav(movieId: string): Observable<string[]> {
    return this.authService.user.pipe(
      take(1),
      exhaustMap((user) => {
        const headers = new HttpHeaders({
          Authorization: `Bearer ${user?.token}`,
        });

        return this.http
          .post<any>(`${this.URL}/add-fav`, { movieId }, { headers })
          .pipe(map((response) => response.data.favMovies));
      })
    );
  }
}
```

**Key RxJS concepts:**

- **`take(1)`**: Only takes the _first_ emitted value from the observable (the current user) and then completes. Prevents memory leaks.
- **`exhaustMap`**: Waits for the inner HTTP request to complete before processing another emission. Prevents multiple HTTP calls if the source observable emits again quickly.
- **`HttpHeaders`**: Used to attach the `Authorization: Bearer <token>` header to secure requests.

**What this code does as a whole:**

- Reads the current user from `BehaviorSubject` (Auth Service).
- Takes the token from the user and attaches it to the request header.
- Sends the movie ID to the backend to add it to the user’s favorites.
- Returns the updated favorites list.

---

## 6️⃣ Calling addMovieToFav in a Component

```ts
private userService = inject(User);

addMovieToFav(movieId: string = '6898e282ff893e3d5b8ed89c') {
  this.userService.addMovieToFav(movieId).subscribe({
    next: (res) => console.log('Added:', res),
    error: (err) => console.error(err),
  });
}
```

**What this code does as a whole:**

- Calls the `addMovieToFav()` method in `User Service`.
- Logs the updated favorites list if successful, or logs the error if failed.

---

## Sign up

- in `auth` service.

```ts
   signup( newUser: any) {
    return this.http.post<any>(`${this.URL}/signup`, newUser).pipe(
      map((response) => {
        if (response.token) {
          const decoded = jwtDecode<any>(response.token);
          const expirationDate = new Date(decoded.exp * 1000);
          const loggedInUser = new UserModel(
            decoded.email,
            decoded.id,
            response.token,
            expirationDate
          );
          console.log(decoded);
          this.user.next(loggedInUser);

          return response.data.user;
        } else {
          throw new Error('Token not found in response');
        }
      }),
      catchError(this.handleError)
    );
  }
```

- in `component`

```ts
 onSignup(email: string = 'signup1@gmail.com', password: string= '12345678', confirmPassword: string = '12345678', name:string= 'signup1'){

    this.authService.signup({email, name, password, confirmPassword}).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (error) => {
        console.log(error);
      },
    });

  }
```

## Summary of RxJS operators used:

- **BehaviorSubject**: Stores and emits the latest value (perfect for app-wide state like current user).
- **take(1)**: Automatically unsubscribes after taking the first emitted value.
- **exhaustMap**: Ensures no new inner observable starts until the current one finishes (avoids duplicate requests).
- **map**: Transforms emitted values (e.g., extracting token or favorites array).
- **catchError**: Handles errors in the observable chain.

---
