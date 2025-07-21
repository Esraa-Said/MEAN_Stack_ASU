# Promises

- A Promise is a JavaScript object that represents a value that may be available now, later, or never.

## A Promise has 3 states:

Pending – waiting

Fulfilled – resolved successfully

Rejected – failed with an error

## Basic Example 1

```js
const myPromise_0 = new Promise((resolve, reject) => {
  const success = false;
  if (success) {
    resolve("Solved");
  } else {
    reject("Rejected");
  }
});

myPromise_0
  .then((resolvedValue) => {
    console.log(resolvedValue);
  })
  .catch((error) => {
    console.log(error);
  });
```

## Basic Example 2: promise as function

```js
function myPromiseFunction() {
  return new Promise((resolve, reject) => {
    let x = 5;
    if (x >= 5) {
      resolve("Success");
    } else {
      reject("Reject");
    }
  });
}
myPromiseFunction()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
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

userLogin("mohamed", 12345)
  .then((resolveValue) => {
    console.log(resolveValue);
  })
  .catch((rejectValue) => {
    console.log(rejectValue);
  });
```

---

## Fetch Users

```js
function fetchApi() {
  return new Promise((resolve, reject) => {
    let users = ["user1", "user2", "user3", "user4"];
    if (users.length) resolve(users);
    else reject("No Users");
  });
}

fetchApi()
  .then((resolveValue) => console.log(resolveValue))
  .catch((rejectValue) => console.log(rejectValue));
```

---

## Check Product Availability

```js
function checkStore(product) {
  return new Promise((resolve, reject) => {
    const stock = {
      laptop: 5,
      mouse: 0,
      screens: 10,
    };

    if (stock[product]) {
      resolve(`✅ ${product} is in stock (${stock[product]} available)`);
    } else {
      reject(`❌ ${product} is out of stock`);
    }
  });
}

checkStore("mouse")
  .then((resolveValue) => {
    console.log(resolveValue);
  })
  .catch((rejectValue) => {
    console.log(rejectValue);
  });
```

---

# fetch method

- built in method return **promise**
- fetch(api).then().catch();
- response.json() : return promise

```js
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) =>response.json())
  .then((data) => {
    console.log("✅ Users fetched:", data);
  })
  .catch((err) => {
    console.log("❌ Error fetching users:", err);
  });
```

---

# Solution of Callback Hell Problem

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

// 😍 Clean and readable
makeDough()
  .then(addToppings)
  .then(bakePizza)
  .then(() => {
    console.log("Step 4: Pizza is ready to serve! 🎉");
  });
```
