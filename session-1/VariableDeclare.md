# 🎓 Fundamentals

## 📚 Variable Declaration

In JavaScript, variables can be declared using three keywords: `let`, `const`, and `var`. Each has unique behaviors and use cases:

---

### **🟢 `let`**

- **Scope:** Block-scoped.
- **Reassignment:** Allowed.
- **Redeclaration:** Not allowed in the same scope.
- **Initialization:** Not Required at the time of declaration.
- **Hoisting:** Cannot access before declaration.
- **Best Use Case:** When you need a variable that can change but should remain block-scoped.
- **Example:**
  ```javascript
  let name = "Alice";
  console.log(name); // Output: Alice
  name = "Bob";
  console.log(name); // Output: Bob
  ```

---

### **🔵 `const`**

- **Scope:** Block-scoped.
- **Reassignment:** Not allowed.
- **Redeclaration:** Not allowed in the same scope.
- **Initialization:** Required at the time of declaration.
- **Hoisting:** Cannot access before declaration.
- **Best Use Case:** For values that should not change (constants).
- **Example:**
  ```javascript
  const age = 25;
  console.log(age); // Output: 25
  // age = 30; // ❌ Error: Assignment to constant variable
  ```

---

### **🟡 `var`**

- **Scope:** Function-scoped.
- **Reassignment:** Allowed.
- **Redeclaration:** Allowed.
- **Initialization:** Not Required at the time of declaration.
- **Hoisting:** Can access before declaration with undefined.
- **Best Use Case:** Avoid usage in modern JavaScript due to scoping issues.
- **Example:**
  ```javascript
  var city = "New York";
  console.log(city); // Output: New York
  var city = "Los Angeles"; // Redeclaration allowed
  console.log(city); // Output: Los Angeles
  ```
