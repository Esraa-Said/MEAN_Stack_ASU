# JavaScript Functions 🧠
* A function is a block of code designed to perform a specific task.
Functions help avoid repetition by allowing code reuse.


## 1- Function Declaration [Regular Function]
* In JavaScript, a function can be declared using the `function` keyword.
* **Always has a name**
```js
function calculate(num1, num2, operator) {
  if (operator === "+") return num1 + num2;
  if (operator === "-") return num1 - num2;
  if (operator === "*") return num1 * num2;
  if (operator === "/") return num2 !== 0 ? num1 / num2 : "Can't divide by zero";
  return "Invalid operator";
}

console.log(calculate(10, 5, "+"));
console.log(calculate(10, 0, "/"));
```
```js 
function palindrome(n) {
  let str = String(n);
  for (let i = 0, j = str.length - 1; i <= j; i++, j--) {
    if (str[i] != str[j]) {
      console.log("NO");
      return;
    }
  }
  console.log("YES");
}
palindrome(1234);
```


## 2- Function Expression
* A function expression is another way to define a function.
* Instead of declaring the function, you assign it to a variable.
* **Can be named or anonymous**
```js
const reverseString = function reverseStringFun(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
};

console.log(reverseString("Text"));
```
```js
const secret_2 = function (str) {
  let len = 0;
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === " " && len) break;
    if (str[i] === " ") continue;
    len++;
  }
  console.log(len);
};

secret_2("Hello World");
secret_2("   fly me   to   the moon  ");
secret_2("luffy is still joyboy");
```

## 3- Anonymous Function
* An **anonymous function** is a function without a name.
* It is often used as a function expression or as an argument to other functions.
```js
const lengthOfLastWord = function (str) {
  let len = 0;
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === " " && len) break;
    if (str[i] === " ") continue;
    len++;
  }
  console.log(len);
};

lengthOfLastWord("Esraa");
```

## 4- Arrow Functions
* Arrow functions allows a short syntax for writing function expressions.
```js
const calculateFuelCost = (
  distanceKm,
  fuelEfficiencyKmPerLiter,
  pricePerLiter
) => {
  const litersNeeded = distanceKm / fuelEfficiencyKmPerLiter;
  return litersNeeded * pricePerLiter;
};
const cost = calculateFuelCost(200, 20, 10);
console.log(`Trip will cost: ${cost} EGP`);
```
```js
const priceAfterDiscount = (price, discountPercent) =>
  price - (price * discountPercent) / 100;

console.log(`Final Price: ${priceAfterDiscount(200, 20)} EGP`);
```
```js
const countWords = sentence => {
  let count = 1;
  for (let char of sentence) {
    if (char === " ") count++;
  }
  return count;
};

console.log(`Words count: ${countWords("I love learning JavaScript")}`);
```
