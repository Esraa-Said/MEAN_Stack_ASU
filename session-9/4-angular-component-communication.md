# 📡 Angular Component Communication 

## 🧠 What is Component Communication?

In Angular, applications are built using components that may need to **share data** or **interact with each other**.

Since Angular encourages **component-based architecture**, we often have:
- A **Parent Component** (the container)
- A **Child Component** (a reusable piece of UI)

To allow communication between them, Angular provides mechanisms like `@Input()`, `@Output()`.

---

## 1️⃣ `@Input()` - Passing Data **From Parent to Child**

### 🔍 What is `@Input()`?
- A decorator that allows **data binding from a parent to a child**.
- Used when a parent component wants to pass a value (like a string, number, object, etc.) to its child.

### 🧪 Syntax:
In child component:
```ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<p>Received: {{ productName }}</p>`
})
export class ChildComponent {
  @Input() productName!: string;
}
```

In parent component:
```html
<app-child [productName]="'Laptop'"></app-child>
```

OR with a variable:

```html
<app-child [productName]="selectedProduct"></app-child>
```

---

## 2️⃣ `@Output()` + `EventEmitter` - Passing Events **From Child to Parent**

### 🔍 What is `@Output()`?
- A decorator used to **emit custom events** from the child to the parent.
- Combined with `EventEmitter`.

### 🧪 Syntax:
In child component:
```ts
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<button (click)="sendData()">Send to Parent</button>`
})
export class ChildComponent {
  @Output() productClicked = new EventEmitter<string>();

  sendData() {
    this.productClicked.emit('Product clicked!');
  }
}
```

In parent component:
```html
<app-child (productClicked)="handleProductClick($event)"></app-child>
```

In parent TypeScript:
```ts
handleProductClick(message: string) {
  alert(message);
}
```
## 💻 Full Example: Parent & Child Communication

### ✅ Goal:
- Pass product name from parent to child via `@Input()`
- When a button is clicked in the child, send a message to the parent using `@Output()`

### 📁 child.component.ts
```ts
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: \` <p>Product: {{ productName }}</p>
               <button (click)="notifyParent()">Click Me</button>`\
})
export class ChildComponent {
  @Input() productName!: string;
  @Output() clicked = new EventEmitter<string>();

  notifyParent() {
    this.clicked.emit(\`You clicked on \${this.productName}\`);
  }
}
```

### 📁 parent.component.ts
```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: \`
    <h2>Product List</h2>
    <app-child 
      [productName]="selectedProduct" 
      (clicked)="showAlert($event)">
    </app-child>
  `\
})
export class ParentComponent {
  selectedProduct = 'Laptop';

  showAlert(message: string) {
    alert(message);
  }
}
```

---

## 📝 Recap

| Technique | Direction | Purpose |
|----------|-----------|---------|
| `@Input()` | Parent ➡️ Child | Pass data (string, object, etc.) |
| `@Output()` | Child ➡️ Parent | Emit events (clicks, selections) |

