# JavaScript Arrays 📦

- An **array** is a data structure
- Used to store a collection of elements, such as numbers or strings.
- Arrays are used to organize data so that related values can be accessed easily.


```js
// Declare Array
const friends = ["Salma", "Mohamed", "Ahmed"];
console.log(friends);
const numbers = new Array([1, 2, 3]);
```

```js
// Access Element
console.log(friends[0]);
```

```js
// The Length of the Array
console.log(friends.length);
```

## Array Methods

```js
const years = [1999, 2000, 2001];

// push: Add an element to the end of the array.
years.push(5699);
console.log(years);

// unshift: Add an element to the beginning of the array.
years.unshift(9678);
console.log(years);

// pop: Remove the last element of the array.
years.pop();
console.log(years);

// shift: Remove the first element of the array.
years.shift();
console.log(years);

// indexOf: Get the index of specific element of the array. Return `-1` if not found.
console.log(years.indexOf(2000));
console.log(years.indexOf(200));

// includes: Returns true if the array includes a specific element, otherwise false.
console.log(years.includes(2001));
console.log(years.includes(2002));

// sort
const nums = [5, 9, 6, 7, 1, 4];
nums.sort();
console.log(nums);
const points = [40, 100, 1, 5, 25, 10];
points.sort();
console.log(points);
points.sort((a, b) => {
  return a - b;
});
console.log(points);

// Array Iteration Methods
// forEach():  Used to loop over an array and perform an action on each item.
let numbers_0 = [1, 2, 3, 4];
numbers_0.forEach((num) => {
  console.log(num * 2);
});
console.log(numbers_0);

// filter(): Creates a new array with elements that pass a test.
let numbers_1 = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
numbers_1 = numbers_1.filter((num) => num % 2 == 0);
console.log(numbers_1);
```

