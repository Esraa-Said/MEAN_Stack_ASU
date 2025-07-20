# Functions

A function is a block of code designed to perform a specific task. Functions help avoid repetition of code by allowing you to reuse the same code multiple times.

## content

- [Function Declaration](#function-declaration)
- [Using a Function](#using-a-function)
- [Defining Parameters](#defining-parameters)
- [Function Expression](#function-expression)
- [Anonymous Functions](#anonymous-functions)
- [Arrow Functions](#arrow-functions)

## Function Declaration

In JavaScript, a function can be declared using the `function` keyword.
**Always has a name**

```javascript
function logger() {
  console.log("This is a logger function");
}
```

## Using the Function

To use or execute the function, simply call it by its name followed by parentheses.
**Calling** - **Invoking** - **Running**

Example:

```javascript
logger();
```

---

### Hoisting:

Function declarations are hoisted. This means the function can be called before it is defined in the code. The entire function is available throughout the scope where it’s declared.

```javascript
greet(); // No error, function is hoisted

function greet() {
  console.log("Hello!");
}
// output: Hello!
```

## Defining Parameters

Parameters are placeholders defined in a function declaration to accept input values when the function is called. These values are known as arguments.

```javascript
function greet(name) {
  console.log(`Hello, ${name}!`);
}
greet("esraa");
```

---


## Function Expression

A function expression is another way to define a function. Instead of declaring the function, you assign it to a variable.  
**Can be named or anonymous**

```javascript
const greet = function hi (name) {
  console.log(`Hello, ${name}!`);
};

greet("Esraa");
```

---

### Not Hoisted:

Function expressions are not hoisted. This means you cannot call the function before its definition. The function can only be used after it’s assigned.

```javascript
greet(); // Error: greet is not a function
const greet = function hi() {
  console.log("Hello!");
};
```

## Anonymous Functions

An **anonymous function** is a function without a name. It is often used as a function expression or as an argument to other functions. These functions are not hoisted like named functions and must be defined before use.

### Characteristics of Anonymous Functions

- They do not have a name.
- Commonly assigned to variables or used directly as arguments in higher-order functions.
- They are typically used in scenarios like callbacks, event handlers, and immediate execution.
```javascript
const greet = function (name) {
  console.log(`Hello, ${name}!`);
};

greet("Esraa");
```


## Arrow Functions

**Arrow functions** (introduced in ES6) provide a concise way to write functions in JavaScript. They are syntactically shorter and behave differently with respect to the `this` keyword compared to regular functions.

---

### Syntax

The basic syntax of an arrow function is:

```javascript
(parameter1, parameter2, ...) => {
  // Function body
}
```

- For a single parameter, parentheses can be omitted.
- For a single expression, braces and the `return` keyword can be omitted, and the expression's value is returned implicitly.

### Examples of Arrow Functions

---

#### Example 1: Arrow Function with Multiple Parameters

```javascript
const add = (a, b) => {
  return a + b;
};

console.log(add(5, 3)); // Output: 8
```

#### Example 2: Implicit Return

If the function body consists of a single expression, you can omit the curly braces `{}` and the `return` keyword.

```javascript
const add = (a, b) => a + b;

console.log(add(5, 3)); // Output: 8
```

#### Example 3: Single Parameter (No Parentheses Needed)

```javascript
const greet = name => `Hello, ${name}!`;

console.log(greet("Esraa")); // Output: Hello, Esraa!
```

#### Example 4: No Parameters

```javascript
const sayHello = () => "Hello, World!";

console.log(sayHello()); // Output: Hello, World!
```

