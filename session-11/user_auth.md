
# Angular Authentication 

This guide explains how to implement **JWT-based authentication** in Angular using RxJS operators like `BehaviorSubject`, `take`, and `exhaustMap`.  
It also covers **login**, **signup**, **decoding JWT tokens**, and **adding **token** with Authorization headers**.

---

## 1. Auth Service (Login)

**Purpose:** Handle user login, decode the JWT token, store user state in a `BehaviorSubject`.

```ts
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, throwError, BehaviorSubject } from 'rxjs';
import { UserModel } from '../models/user';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private http = inject(HttpClient);
  private URL = 'http://localhost:5000/users/login';

  // BehaviorSubject stores the latest user state and emits it to new subscribers
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
          console.log(decoded);
          this.user.next(loggedInUser); // Update BehaviorSubject
          return loggedInUser;
        } else {
          throw new Error('Token not found in response');
        }
      }),
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    let errorResponse = {
      status: 'fail',
      message: 'An unknown error has occurred',
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

---

## 2. Signup Method in Auth Service

**Purpose:** Register a new user, decode the token from the server, and store the user in `BehaviorSubject`.

```ts
signup(newUser: any) {
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

---

## 3. Login Component

**Purpose:** Call the `login` or `signup` method and react to the result.

```ts
import { Component, inject } from '@angular/core';
import { Auth } from '../services/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private authService = inject(Auth);

  onLogin(email: string = 'front@gmail.com', password: string = '12345678') {
    this.authService.login(email, password).subscribe({
      next: (user) => {
        console.log('Logged in:', user);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  onSignup() {
    const newUser = { name: 'Test', email: 'test@example.com', password: '12345678' };
    this.authService.signup(newUser).subscribe({
      next: (user) => {
        console.log('Signed up:', user);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
```
```html
<button type="button" (click)="onLogin()">Login</button>
<button type="button" (click)="onSignup()">Signup</button>
```

---

## 4. User Model

**Purpose:** Represent the logged-in user and automatically validate the token.

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

---

## 5. User Service (Add Favorite Movie)

**Purpose:** Add a movie to the user's favorites while attaching the JWT token to the request header.

```ts
import { inject, Injectable } from '@angular/core';
import { Auth } from './auth';
import { exhaustMap, map, Observable, take } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserModel } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class User {
  private authService = inject(Auth);
  private http = inject(HttpClient);
  private URL = 'http://localhost:5000/users';

  addMovieToFav(movieId: string): Observable<string[]> {
    return this.authService.user.pipe(
      take(1), // Take only the current value, then complete
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

---

## 6. Explanation of Key RxJS Operators

### BehaviorSubject
- A special type of Subject that stores the **latest value** emitted to subscribers.
- When a new subscriber joins, it immediately receives the last emitted value.

### take(1)
- Takes **only the first emitted value** from the observable, then automatically completes.
- Useful for getting the current state once without staying subscribed.

### exhaustMap
- Ignores any new emissions from the source observable while the current inner observable is still running.
- Great for preventing duplicate HTTP calls if a user clicks multiple times.

---



## Summary Flow
1. **Login / Signup** → get JWT from backend → decode → store user in `BehaviorSubject`.
2. **Any feature needing the user** → subscribe to `BehaviorSubject`.
3. **Favorites API** → take(1) current user → attach token → send to backend.
4. Token validation is handled in **UserModel**.
