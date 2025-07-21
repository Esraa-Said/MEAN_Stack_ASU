# Async - Await

- Help making asynchronous code behavior with cleaner style.

```js
function myPromiseFunction() {
  return new Promise((resolve, reject) => {
    let x = 0;
    if (x >= 5) {
      resolve("Success");
    } else {
      reject("Reject");
    }
  });
}

async function use() {
  try {
    const resolve = await myPromiseFunction();
    console.log("✅", resolve);
  } catch (err) {
    console.log("❌", err);
  }
}

use();
```

---

## User Login

```js
function userLogin(username, password) {
  return new Promise((resolve, reject) => {
    if (username === "esraa" && password === 12345) {
      resolve("Successfully Login");
    } else {
      reject("Invalid Login");
    }
  });
}

async function use() {
  try {
    const message = await userLogin("esraa", 12345);
    console.log(message);
  } catch (err) {
    console.log(err);
  }
}

use();
```

---

## Send Message

```js
function sendMessage(phone, message) {
  return new Promise((resolve, reject) => {
    if (!phone || !message) {
      reject("❌ Phone or message is missing");
    } else {
      setTimeout(() => {
        resolve(`📨 Message sent to ${phone}`);
      }, 1000);
    }
  });
}

async function send() {
  try {
    const message = await sendMessage("01012345678", "Hello Esraa!");
    console.log(message);
  } catch (err) {
    console.log(err);
  }
}
send();
```

## Fetch Method

```js
async function fetchData() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
fetchData();

```

# Solution of Callback Hell

```js
function makeDough() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 1: Dough is ready 🍞");
      resolve();
    }, 1000);
  });
}

function addToppings() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 2: Toppings added 🍅🧀");
      resolve();
    }, 1000);
  });
}

function bakePizza() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 3: Pizza baked 🍕");
      resolve();
    }, 1000);
  });
}

// 🔥 Using async/await = clean + readable
async function preparePizza() {
  await makeDough();
  await addToppings();
  await bakePizza();
  console.log("Step 4: Pizza is ready to serve! 🎉");
}

preparePizza();
```



