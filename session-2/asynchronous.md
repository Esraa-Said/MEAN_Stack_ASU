# Asynchronous

- Asynchronous code runs in **Background**.
- There is **callback** function will run after finish.
- Asynchronous code is **non-blocking**.
- Execution doesn't wait for an asynchronous task to finish its work.

```js
const p = document.querySelector(".p");
setTimeout(function () {
  p.textContent = "My name is Ahmed";
}, 5000);
p.style.color = "red";
```

## How Asynchronous Code Work

```js
console.log("Hello 1");

setTimeout(() => {
  console.log("Hello from set time out");
}, 2000);

console.log("Hello 2");
// **************************
console.log("Hello 1");
console.log("Hello 2");
setTimeout;


```

---

```js
console.log("Hello 1");

setTimeout(() => {
  console.log("Hello from set time out 1");
}, 2000);

setTimeout(() => {
  console.log("Hello from set time out 2");
}, 2000);
console.log("Hello 2");

// **********
console.log("Hello 1");
console.log("Hello 2");
setTimeout1;
setTimeout2;


```

---

```js
console.log("Hello 1");

setTimeout(() => {
  console.log("Hello from set time out 1");
}, 3000);

setTimeout(() => {
  console.log("Hello from set time out 2");
}, 2000);
console.log("Hello 2");

// **********
console.log("Hello 1");
console.log("Hello 2");
setTimeout2;
setTimeout1;

```
