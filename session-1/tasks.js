// Check if Array is Sorted
const isSorted = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] > arr[i]) {
      console.log("the array is not sorted");
      return;
    }
  }
  console.log("the array is sorted");
};
isSorted([1, 2, 5]);
isSorted([1, 5, 4]);

// Return Numbers Greater Than a Value
const numbersGreaterThanValue_v1 = (numbers, val) => {
  let nums = numbers.filter((num) => num > val);
  console.log(nums);
};
numbersGreaterThanValue_v1([1, 2, 3, 4, 5, 6, 7, 8, 9], 3);

const numbersGreaterThanValue_v2 = (numbers, val) => {
  let nums = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > val) nums.push(numbers[i]);
  }
  console.log(nums);
};
numbersGreaterThanValue_v2([1, 2, 3, 4, 5, 6, 7, 8, 9], 3);

// https://leetcode.com/problems/plus-one/description/

const plusOne_v1 = (arr) => {
  let str = arr.join("");
  let num = Number(str) + 1;
  str = String(num);
  arr = str.split("").map((n) => Number(n));
  console.log(arr);
};

plusOne_v1([1, 2, 3]);
plusOne_v1([4, 3, 2, 1]);
plusOne_v1([9]);

const plusOne_v2 = (arr) => {
  let flag = false;
  let i = 0;
  for (i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === 9) {
      arr[i] = 0;
      flag = true;
    } else {
      arr[i]++;
      break;
    }
  }
  if (flag && i < 0) arr.unshift(1);
  console.log(arr);
};
plusOne_v2([1, 2, 3]);
plusOne_v2([4, 3, 2, 1]);
plusOne_v2([9]);

// https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/
let removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;
  let k = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] != nums[i - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
};

console.log(removeDuplicates([1, 1, 2]));
