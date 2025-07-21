# Synchronous Code

- Most Code is Synchronous.
- Synchronous code is executed line by line.
- Each line of code waits for the previous line to finish.
- Problem: if one line of code takes a lot of time, this block the next code execution.
---

## Examples
```js
console.log("1: Start");
console.log("2: Processing");
console.log("3: End");
```
---
```js
function sayHi() {
  console.log("2: Inside Function");
}

console.log("1: Before calling function");
sayHi();
console.log("3: After calling function");
```
---
```js
console.log("Start Loop");

for (let i = 1; i <= 3; i++) {
  console.log("Loop number: " + i);
}

console.log("End Loop");
```
