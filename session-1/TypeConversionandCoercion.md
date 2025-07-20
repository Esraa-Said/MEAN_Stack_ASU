# Type Conversion and Coercion in JavaScript

JavaScript is a dynamically typed language, meaning variables can hold values of any type, and the type of a variable can change during runtime. Understanding **type conversion** and **coercion** is essential for writing predictable and bug-free code.

---

## Table of Contents
1. [Type Conversion](#1-type-conversion)
   - [String to Number](#a-string-to-number)
   - [Number to String](#b-number-to-string)
   - [Boolean to Number](#c-boolean-to-number)
   - [Using `parseInt` and `parseFloat`](#d-using-parseint-and-parsefloat)
2. [Type Coercion](#2-type-coercion)
   - [String and Number Coercion](#a-string-and-number-coercion)
   - [Number and Boolean Coercion](#b-number-and-boolean-coercion)
   - [Loose Equality (`==`)](#c-loose-equality)
   - [Strict Equality (`===`)](#d-strict-equality)


---

## 1. Type Conversion
Type conversion (also known as **type casting**) is the process of explicitly converting a value from one data type to another. This is done using built-in functions or operators.

### a) String to Number
```javascript
    let str = "123";
    let num = Number(str); // Explicitly convert 
    console.log(num); // 123 (number)
```


### b) Number to String
```javascript
    let num = 123;
    let str = String(num); // Explicitly convert number to string
    console.log(str); // "123" (string)
```

### c) Boolean to Number
```javascript
    let bool = true;
    let num = Number(bool); // Explicitly convert boolean to number
    console.log(num); // 1 (number)
```
### d) Using parseInt and parseFloat
```javascript
    let str = "123.45";
    let intVal = parseInt(str); // Convert to integer
    let floatVal = parseFloat(str); // Convert to float
    console.log(intVal); // 123 (integer)
    console.log(floatVal); // 123.45 (float)
```

---
## 2. Type Coercion
Type coercion is the implicit conversion of one data type to another during runtime, typically when JavaScript expects a value of a certain type in an expression.

### a) String and Number Coercion
```javascript
    let str = "5";
    let num = 3;
    let result = str + num; // Implicit coercion occurs
    console.log(result); // "53" (string)
```
### b) Number and Boolean Coercion
```javascript
    let bool = false;
    let num = 0;
    console.log(num == bool); // true (because false is coerced to 0)
```
### c) Loose Equality (==)
```javascript
    let value1 = "123";
    let value2 = 123;
    console.log(value1 == value2); // true (coercion happens during comparison)
```
### d) Strict Equality (===)
```javascript
    let value1 = "123";
    let value2 = 123;
    console.log(value1 === value2); // false (no coercion, types must match)
```