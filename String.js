// First Question
const reverseString = (string) => string.split("").reverse().join("");

console.log(reverseString("Hello"));

// Second Question
const reverseInt = (n) => {
  const reversedInt = n.toString().split("").reverse().join("");
  return parseInt(reversedInt) * Math.sign(n);
};

console.log(reverseInt(-123));

// Third Question
const capital = (str) => {
  const name = str
    .toLowerCase()
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
  return name;
};

console.log(capital("yuvraj sharma"));

// Logic Questions
// Buzz Fizz
const fizzBuzz = (n) => {
  for (let i = 0; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
};
const value = 15;
fizzBuzz(value);

// Trade
let maxProfit = (prices) => {
  let minPrice = prices[0];
  let maxProfit = 0;
  for (let i = 1; i < prices.length; i++) {
    const currentPrice = prices[i];

    minPrice = Math.min(minPrice, currentPrice);

    const potentialProfit = currentPrice - minPrice;

    maxProfit = Math.max(maxProfit, potentialProfit);
  }
  return maxProfit;
};

const prices = [7, 1, 5, 3, 6, 4];
const profit = maxProfit(prices);
console.log("maximum profit: ", profit);

// Array Separator
const chunk = (array, size) => {
  const chunked = [];
  let index = 0;

  while (index < array.length) {
    const chunk = array.slice(index, index + size);
    chunked.push(chunk);
    index += size;
  }
  return chunked;
};

console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 4));

// Finding numbers from the list to add and get result
//This is not optimised we will work on it later
function twoSum(nums, target) {
  //loop through each number in the list
  for (let i = 0; i < nums.length; i++) {
    //for each number, check the rest of list
    for (let j = i + 1; j < nums.length; j++) {
      // If the current number and the one we are checking add ip to the target, return their indexes
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  return [];
}

const res = twoSum([2, 7, 11, 15], 9);
console.log(res);
