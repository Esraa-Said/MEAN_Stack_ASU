# 🎓 Fundamentals

## 📚 DataTypes
JavaScript uses **dynamic typing**, meaning:
- You don’t need to manually define the type of a value stored in a variable.
- The type is determined automatically.
- A variable is **not bound to a specific type** and can change its type at runtime.

Every value in JavaScript is either:

- **🌟 Primitive**
  - Immutable basic types like `Number`, `String`, `Boolean`, etc.

- **🛠 Object**
  - Complex data structures like `Object`, `Array`, `Function`, etc.

---

## 🌟 Primitive Data Types
1. **`number`**
   - Represents numeric values.
   - Examples: `42`, `3.14`, `Infinity`, `NaN`.
   
2. **`string`**
   - Represents textual data.
   - Examples: `"Hello"`, `'World'`, `` `Template Literals` ``.

3. **`boolean`**
   - Represents logical values: `true` or `false`.

4. **`undefined`**
   - A variable declared but not assigned a value.
     ```javascript
     let x; // x is undefined
     ```
   - Indicates an empty value.

5. **`null`**
   - Represents the intentional absence of value.
     ```javascript
     let empty = null;
     ```
    - typeof null: object.

6. **`symbol`**
   - Represents a unique and immutable value.
   - Useful for creating unique keys.
     ```javascript
     const uniqueId = Symbol('id');
     ```

7. **`bigint`**
   - Used for representing integers larger than `Number.MAX_SAFE_INTEGER`.
     ```javascript
     const largeNum = 12345678901234567890n;
     ```

---

### 🔖 Note
- the result of any **NaN** operation except **+** is **NaN**.
- **null** == **undefined** is **true**.
