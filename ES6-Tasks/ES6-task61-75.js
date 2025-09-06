// List Property Values:
//  ● Create an object movie with properties title, director, year,
// and genre.
//  ● Use Object.values() to get an array of the property values of the
// movie object.
//  ● Log the array to the console

let movie = {
  title: "Inception",
  director: "Nolan",
  year: 2010,
  genre: "Sci-Fi",
};
console.log("Task 61:", Object.values(movie));

// Sum Values:
//  ● Create an object scores with properties math, science, and
// english, each with numeric values.
//  ● Use Object.values() to get an array of the property values and
// calculate the total sum of the values.
//  ● Log the sum to the console.

let scores = { math: 90, science: 85, english: 88 };
let total = Object.values(scores).reduce((sum, val) => sum + val, 0);
console.log("Task 62: Total =", total);

// Iterate Over Values:
//  ● Create an object user with properties username, email, and
// location.
//  ● Use Object.values() to get an array of the property values and
// iterate over this array to log each value.

let userObj = { username: "Shoaib", email: "s@mail.com", location: "Karachi" };
Object.values(userObj).forEach((value) => console.log("Task 63:", value));

// List Entries:
//  ● Create an object car with properties make, model, and year.
//  ● Use Object.entries() to get an array of the key-value pairs of the
// car object.
//  ● Log the array to the console.

let carObj = { make: "Honda", model: "Civic", year: 2022 };
console.log("Task 64:", Object.entries(carObj));

// Convert Object to Array:
//  ● Create an object person with properties firstName, lastName,
// and age.
//  ● Use Object.entries() to convert the person object into an array
// of key-value pairs.
//  ● Log the array to the console.

let personObj2 = { firstName: "Ali", lastName: "Khan", age: 28 };
console.log("Task 65:", Object.entries(personObj2));

// Iterate Over Entries:
//  ● Create an object settings with properties theme,
// notifications, and privacy.
//  ● Use Object.entries() to get an array of the key-value pairs and
// iterate over this array to log each key and value

let settingsObj = { theme: "dark", notifications: true, privacy: "high" };
Object.entries(settingsObj).forEach(([key, value]) => {
  console.log(`Task 66: ${key} = ${value}`);
});

// Filter Keys:
//  ● Create an object inventory with properties apples, bananas,
// oranges, and grapes, each with numeric values.
//  ● Use Object.keys() and filter() to get an array of keys where
// the value is greater than 10.
//  ● Log the array to the console.

let inventory = { apples: 5, bananas: 12, oranges: 8, grapes: 15 };
let keysGreaterThan10 = Object.keys(inventory).filter(
  (stock) => inventory[stock] > 10
);
console.log("Task 67:", keysGreaterThan10);

// Transform Values:
//  ● Create an object temperatures with properties morning,
// afternoon, and evening, each with numeric values.
//  ● Use Object.entries() to get an array of key-value pairs, then use
// map() to convert the temperatures from Celsius to Fahrenheit.
//  ● Convert the transformed array back to an object.
//  ● Log the new object to the console.

let temperatures = { morning: 20, afternoon: 30, evening: 25 };
let transformed = Object.fromEntries(
  Object.entries(temperatures).map(([key, value]) => [
    key,
    (value * 9) / 5 + 32,
  ])
);
console.log("Task 68:", transformed);

// Key-Value Swap:
//  ● Create an object roles with properties admin, editor, and
// viewer, each with string values.
//  ● Use Object.entries() to get an array of key-value pairs, then use
// map() to swap the keys and values.
//  ● Convert the transformed array back to an object.
//  ● Log the new object to the console

let roles = { admin: "AdminUser", editor: "EditorUser", viewer: "ViewerUser" };
let swapped = Object.fromEntries(
  Object.entries(roles).map(([key, value]) => [value, key])
);
console.log("Task 69:", swapped);

// Filter and Map:
//  ● Create an array numbers with values from 1 to 10.
//  ● Write a higher-order function filterAndMap that takes an array, a
// filter function, and a map function.
//  ● Use this function to filter out even numbers and then square the
// remaining numbers.
//  ● Log the resulting array to the console.

let numbers70 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function filterAndMap(arr, filterFn, mapFn) {
  return arr.filter(filterFn).map(mapFn);
}
let result70 = filterAndMap(
  numbers70,
  (n) => n % 2 !== 0,
  (n) => n * n
);
console.log("Task 70:", result70);

// Sort and Reduce:
//  ● Create an array words with the values "apple", "banana", "cherry",
// "date".
//  ● Write a higher-order function sortAndReduce that takes an array, a
// sort function, and a reduce function.
//  ● Use this function to sort the words alphabetically and then
// concatenate them into a single string.
//  ● Log the resulting string to the console

let words71 = ["apple", "banana", "cherry", "date"];
function sortAndReduce(arr, sortFn, reduceFn) {
  return arr.sort(sortFn).reduce(reduceFn);
}
let result71 = sortAndReduce(
  words71,
  (a, b) => (a > b ? 1 : -1),
  (a, b) => a + " " + b
);
console.log("Task 71:", result71);

// Simple Callback:
//  ● Write a function greet that takes a name and a callback function.
//  ● The greet function should call the callback function with a greeting
// message.
//  ● Write a callback function printGreeting that logs the message to
// the console.
//  ● Call the greet function with a name and the printGreeting
// callback

function greet(name, callback) {
  callback(`Hello, ${name}`);
}
function printGreeting(msg) {
  console.log("Task 72:", msg);
}
greet("Shoaib", printGreeting);

// Asynchronous Callback:
//  ● Write a function fetchData that simulates fetching data from a
// server (use setTimeout to delay execution).
//  ● The fetchData function should take a callback function and call it
// with the data after a delay.
//  ● Write a callback function displayData that logs the data to the
// console.
//  ● Call the fetchData function with the displayData callback.

function fetchData(callback) {
  setTimeout(() => {
    callback("Task 73: Data fetched!");
  }, 1000);
}
function displayData(data) {
  console.log(data);
}

fetchData(displayData);

// Simple Arrow Function:
//  ● Convert the following function to an arrow function:
//  function add(a, b) {
//   return a + b;
//  }
//  ● Log the result of calling the arrow function with arguments 3 and 5.

const add = (a, b) => a + b;
console.log("Task 74:", add(3, 5));

// Arrow Function with Array Methods:
//  ● Create an array numbers with values from 1 to 5.
//  ● Use the map method and an arrow function to create a new array with
// each number squared.
//  ● Log the resulting array to the console

let numbers75 = [1, 2, 3, 4, 5];
let squared = numbers75.map((n) => n * n);
console.log("Task 75:", squared);
