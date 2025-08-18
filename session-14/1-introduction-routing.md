# Routing

**Routing** enables navigation within your app without reloading the entire page—essential for creating dynamic, single-page applications (SPAs). In Angular, the @angular/router library handles this by connecting URL paths to components and rendering them appropriately.

## How Angular manages routing
Angular’s routing system is built on three core elements:

- **Routes** define which component displays when a user visits a specific URL.
- **Outlets** Mark areas in your template where components are dynamically rendered.
- **Links** provide a way for users to navigate between different routes in your application without triggering a full page reload.


---

## What are routes?
A route is a configuration object that maps a URL path to a component:

```ts
import { AdminPage } from './app-admin/app-admin.component';
const adminPage = {
  path: 'admin',
  component: AdminPage
}
```

When a user navigates to /admin, Angular renders the AdminPage component.

---

## Managing routes in your application
Most projects define routes in a separate file `src/app/app.routes.ts`

```ts
import { Routes } from '@angular/router';
import { HomePage } from './home-page/home-page.component';
import { AdminPage } from './about-page/about-page.component';
export const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'about',
    component: aboutPage,
  },
];
```


## Enabling Router in Standalone Apps

* configure routing using `provideRouter` in `providers` array in `app.config.ts`.

```ts
import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from "@angular/core";
import { provideRouter } from "@angular/router";

import { routes } from "./app.routes";
import { provideHttpClient } from "@angular/common/http";

export const appConfig: ApplicationConfig = {
  providers: [provideBrowserGlobalErrorListeners(), provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideHttpClient()],
};
```

---

## Show routes with outlets

* `<router-outlet>` is the placeholder for routed components. 
* `RouterOutlet` is a directive that acts as a container where Angular dynamically loads and displays the component that matches the active route.

```html

<router-outlet />  <!-- Angular inserts your route content here -->

```

```ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {}
```