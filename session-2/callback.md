# Callback functions

- **Callbacks** are functions that are passed as **arguments** to a function and are executed after the completion of a certain task.
- They are commonly used in asynchronous operations, such as reading files, making HTTP requests, or handling user input.

- Callback functions alone do NOT make code asynchronous.
- Synchronous:

```js
[5, 3, 1].filter((e) => e >= 3);
```

## Callback in Synchronous functions

```js
function login(username, password, callback) {
  console.log(`Logging in with username: ${username} and password ${password}`);

  callback(username, password, showWelcome);
}

function checkPassword(username, password, showWelcome) {
  if (username === "esraa" && password === "12345") {
    showWelcome(username);
  } else {
    console.log("Login failed. Invalid username or password.");
  }
}

function showWelcome(username) {
  console.log(`Login successful! Welcome, ${username}!`);
}

login("esraa", "12345", checkPassword);

// login() --> checkPassword() --> showWelcome()
```



## Callback in Asynchronous functions

- What happens when I use a callback inside an asynchronous function?

```js
console.log("Hello 1");

setTimeout(() => {
  console.log("Hello from set time out");
}, 2000);

console.log("Hello 2");

// logs
console.log("Hello 1");
console.log("Hello 2");
setTimeout;


```

---

- What happens when I use multiple setTimeouts?

```js
console.log("Hello 1");

setTimeout(() => {
  console.log("Hello from set time out 1");
}, 2000);

setTimeout(() => {
  console.log("Hello from set time out 2");
}, 2000);
console.log("Hello 2");

// logs
console.log("Hello 1");
console.log("Hello 2");
setTimeout1;
setTimeout2;


```

---

- What happens when the delay time is different for each setTimeout?

```js
console.log("Hello 1");

setTimeout(() => {
  console.log("Hello from set time out 1");
}, 3000);

setTimeout(() => {
  console.log("Hello from set time out 2");
}, 2000);
console.log("Hello 2");

console.log("Hello 1");
console.log("Hello 2");
setTimeout2;
setTimeout1;

```

---

- What is the problem of this code?

```js
function getUsers() {
  setTimeout(() => {
    return ["user1", "user2", "user3"];
  }, 1000);
}

const users = getUsers();
console.log(users);
```

---

- Solution

```js
const callback = (users) => {
  console.log(users);
};
function getUsers(callback) {
  setTimeout(() => {
    callback(["user1", "user2", "user3"]);
  }, 1000);
}

getUsers(callback);

[JS Code Starts] → Call Stack → getUsers(callback)
                            ↳ setTimeout → Web APIs
                                              ↳ بعد 1 ثانية → Callback Queue
                                                                  ↳ Event Loop
                                                                          ↳ Call Stack → callback() → console.log(...)

 
```

## nested callbacks

- users => user => salary

```js
function getUsers(callback) {
  setTimeout(() => {
    callback([
      { name: "user1", salary: 4000 },
      { name: "user2", salary: 5000 },
      { name: "user3", salary: 6000 },
    ]);
  }, 1000);
}

function getUserByName(name, users, callback) {
  setTimeout(() => {
    const user = users.find((u) => u.name === name);
    callback(user);
  }, 1000);
}

function getSalary(user, callback) {
  setTimeout(() => {
    callback(user.salary);
  }, 500);
}

// ✅ Callbacks chain
getUsers((users) => {
  console.log("📦 All users:", users);

  getUserByName("user2", users, (user) => {
    console.log("🙋‍♂️ Selected user:", user);

    getSalary(user, (salary) => {
      console.log("💰 User salary:", salary);
    });
  });
});

```

## Callback Hell

- When multiple asynchronous operations depend on each other, callbacks get deeply nested, making the code hard to read and maintain.

```js
function makeDough(callback) {
  setTimeout(() => {
    console.log("Step 1: Dough is ready 🍞");
    callback();
  }, 1000);
}

function addToppings(callback) {
  setTimeout(() => {
    console.log("Step 2: Toppings added 🍅🧀");
    callback();
  }, 1000);
}

function bakePizza(callback) {
  setTimeout(() => {
    console.log("Step 3: Pizza baked 🍕");
    callback();
  }, 1000);
}


makeDough(() => {
  addToppings(() => {
    bakePizza(() => {
      console.log("Pizza is ready to serve! 🎉");
    });
  });
});



```
