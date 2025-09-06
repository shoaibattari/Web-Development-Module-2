// Variable Scope:
//  ● Write a function outer that declares a variable x and assigns it a
// value.
//  ● Inside outer, write another function inner that logs x to the console.
//  ● Call the inner function from within outer.
//  ● Call the outer function to see the result.

function outer() {
  let x = 12;
  function inner() {
    console.log("Task 76:", x);
  }
  inner();
}
outer();

// Closure:
//  ● Write a function createCounter that returns another function.
//  ● The returned function should increment and log a counter variable
// that is declared in createCounter.
//  ● Create two counters and demonstrate that they maintain independent
// state.

function createCounter() {
  let count = 0;
  return function () {
    count++;
    console.log("Task 77: count =", count);
  };
}
let counter1 = createCounter();
let counter2 = createCounter();
counter1(); // 1
counter1(); // 2
counter2(); // 1

// Simple Default Parameters:
//  ● Write a function greet that takes a name and a greeting message
// with a default value of "Hello".
//  ● The function should log the greeting message and the name to the
// console.
//  ● Call the function with and without the greeting message to see both
// cases.

function greet(name, msg = "Hello") {
  console.log("Task 78:", `${msg}, ${name}`);
}
greet("Shoaib");
greet("Shoaib", "Hi");

// Default Parameters with Other Arguments:
//  ● Write a function calculateArea that takes width and height with
// default values of 10 and 5, respectively.
//  ● The function should return the area.
//  ● Call the function with and without arguments and log the results.

function calculateArea(width = 10, height = 5) {
  return width * height;
}
console.log("Task 79:", calculateArea());
console.log("Task 79:", calculateArea(4, 6));

// Square Numbers:
//  ● Create an array numbers with values [1, 2, 3, 4, 5].
//  ● Use map to create a new array where each number is squared.
//  ● Log the resulting array to the console

let numbers = [1, 2, 3, 4, 5];
let squared = numbers.map((n) => n * n);
console.log("Task 80:", squared);

// Convert to Uppercase:
//  ● Create an array words with values ["apple", "banana",
// "cherry"].
//  ● Use map to create a new array where each word is converted to
// uppercase.
//  ● Log the resulting array to the console

let words = ["apple", "banana", "cherry"];
let upperWords = words.map((word) => word.toUpperCase());
console.log("Task 81:", upperWords);

// Filter Even Numbers:
//  ● Create an array numbers with values [1, 2, 3, 4, 5, 6, 7,
// 8, 9, 10].
//  ● Use filter to create a new array containing only even numbers.
//  ● Log the resulting array to the console

let numbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evensAns = numbersArr.filter((n) => n % 2 === 0);
console.log("Task 82:", evensAns);

//  Filter Long Words:
// ● Create an array words with values ["apple", "banana",
// "cherry", "date"].
//  ● Use filter to create a new array containing only words with more
// than 5 characters.
//  ● Log the resulting array to the console.

let fruits = ["apple", "banana", "cherry", "date"];
let longWords = fruits.filter((word) => word.length > 5);
console.log("Task 83:", longWords);

// Log Numbers:
//  ● Create an array numbers with values [1, 2, 3, 4, 5].
//  ● Use forEach to log each number to the console.

let numbersList = [1, 2, 3, 4, 5];
numbersList.forEach((number) => console.log("Task 84:", number));

// Log Word Lengths:
//  ● Create an array words with values ["apple", "banana",
// "cherry"].
//  ● Use forEach to log the length of each word to the console

let wordsList = ["apple", "banana", "cherry"];
wordsList.forEach((word) =>
  console.log("Task 85:", word, "length =", word.length)
);

// Sum of Numbers:
//  ● Create an array numbers with values [1, 2, 3, 4, 5].
//  ● Use reduce to calculate the sum of the numbers.
//  ● Log the result to the console.

let numbersList2 = [1, 2, 3, 4, 5];
let sum = numbersList2.reduce((a, b) => a + b, 0);
console.log("Task 86:", sum);

// Concatenate Strings:
//  ● Create an array words with values ["Hello", "world",
// "this", "is", "JavaScript"].
//  ● Use reduce to concatenate all the words into a single string,
// separated by spaces.
//  ● Log the result to the console

let wordsForSentence = ["Hello", "world", "this", "is", "JavaScript"];
let sentence = wordsForSentence.reduce((a, b) => a + " " + b);
console.log("Task 87:", sentence);

// Check for Even Number:
//  ● Create an array numbers with values [1, 3, 5, 7, 8].
//  ● Use some to check if there is at least one even number in the array.
//  ● Log the result to the console.

let numbers88 = [1, 3, 5, 7, 8];
let hasEven = numbers88.some((number) => number % 2 === 0);
console.log("Task 88:", hasEven);

// Check for Long Word:
//  ● Create an array words with values ["apple", "banana",
// "cherry", "date"].
//  ● Use some to check if there is at least one word with more than 5
// characters.
//  ● Log the result to the console

let words89 = ["apple", "banana", "cherry", "date"];
let hasLong = words89.some((w) => w.length > 5);
console.log("Task 89:", hasLong);

// Check All Even Numbers:
//  ● Create an array numbers with values [2, 4, 6, 8, 10].
//  ● Use every to check if all numbers in the array are even.
//  ● Log the result to the console

let numbers90 = [2, 4, 6, 8, 10];
let allEven = numbers90.every((number) => number % 2 === 0);
console.log("Task 90:", allEven);
