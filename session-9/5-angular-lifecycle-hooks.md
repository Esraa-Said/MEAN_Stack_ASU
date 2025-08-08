
# Angular Lifecycle Hooks

Angular lifecycle hooks are special methods that allow you to tap into key events in a component or directive's lifecycle, from creation to destruction.

---

## 📌 Why Lifecycle Hooks?

They allow you to:
- Run initialization logic (e.g. data fetching)
- Detect changes in input properties
- Clean up resources (e.g. subscriptions, timers)
- Control what happens during rendering phases

---

## 🔄 List of Common Lifecycle Hooks

| Hook | Purpose |
|------|---------|
| `ngOnChanges` | Called when input properties change |
| `ngOnInit` | Called once after the first `ngOnChanges` |
| `ngDoCheck` | Called during every change detection run |
| `ngAfterContentInit` | Called after content (ng-content) has been projected into view |
| `ngAfterContentChecked` | Called every time the projected content is checked |
| `ngAfterViewInit` | Called after the component’s views (and child views) have been initialized |
| `ngAfterViewChecked` | Called after the component's views (and child views) have been checked |
| `ngOnDestroy` | Called just before the component is destroyed |

---

## 🔍 Full Example

# Angular Lifecycle Hooks – Example with Parent & Child Components



## 📂 Project Structure

```
src/
 ├── app/
 │    ├── app.component.ts
 │    ├── app.component.html
 │    ├── child/
 │    │    ├── child.component.ts
 │    │    ├── child.component.html
 │    │    └── child.component.css
```

---

## 🟢 Parent Component

### **app.component.ts**

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class App {
  inputValue: string = 'input from parent';
  valid: boolean = true;

  constructor() {
    console.log('Root Component');
  }

  changeInput() {
    this.valid = !this.valid;
  }
}
```

---

### **app.component.html**

```html
@if (valid) {
  <app-child [message]="inputValue">
    <p #projectedParagraph>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      Value from parent: {{ inputValue }}
    </p>
  </app-child>
}

<button (click)="changeInput()">Toggle</button>
```

---

## 🟠 Child Component

### **child.component.ts**

```ts
import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewInit,
  AfterViewChecked,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class Child
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input() message: string = 'input from child';

  constructor() {
    // Called first when the component class is instantiated (before inputs are set)
    console.log('Child Component → constructor', this.message);
  }

  ngOnChanges(changes: SimpleChanges) {
    // Called whenever @Input() values change (before ngOnInit)
    console.log('ngOnChanges → Input changed', changes);
  }

  ngOnInit() {
    // Called once after the first ngOnChanges – good for initialization logic
    console.log('ngOnInit → Component initialized', this.message);
  }

  @ContentChild('projectedParagraph') projectedParagraph!: ElementRef;

  ngDoCheck() {
    // Called during every change detection run – for custom change detection
    console.log('ngDoCheck → Change detection run', this.projectedParagraph);
  }

  @ViewChild('paragraph') paragraph!: ElementRef;

  ngAfterContentInit() {
    // Called once after content projected via <ng-content> is initialized
    console.log('ngAfterContentInit → Projected content ready', this.projectedParagraph?.nativeElement);
  }

  ngAfterContentChecked() {
    // Called after every check of the projected content
    console.log('ngAfterContentChecked → Projected content checked');
  }

  ngAfterViewInit() {
    // Called once after the component's view (and child views) is initialized
    console.log('ngAfterViewInit → View initialized', this.paragraph?.nativeElement);
  }

  ngAfterViewChecked() {
    // Called after every check of the component's view (and child views)
    console.log('ngAfterViewChecked → View checked');
  }

  ngOnDestroy() {
    // Called just before Angular destroys the component – cleanup goes here
    console.log('ngOnDestroy → Component about to be destroyed');
  }
}
```

---

### **child.component.html**

```html
{{ message }}

<!-- Slot for projected content from parent -->
<ng-content></ng-content>

<!-- Element from child's own template -->
<p #paragraph>paragraph</p>
```
