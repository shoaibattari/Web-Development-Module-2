// Adding Elements to an Array:
//  ● Create an array numbers with some elements.
//  ● Use the spread operator to add a new element at the beginning and at
// the end of the numbers array.
//  ● Log the updated array to the console.

let numbers = [2, 3, 4];
let updatedNumbers = [1, ...numbers, 5];
console.log("Task 31:", updatedNumbers);

// Copying an Object:
//  ● Create an object originalObject with some key-value pairs.
//  ● Use the spread operator to create a copy of originalObject called
// copiedObject.
//  ● Log both objects to the console to verify they are the same but not the
// same reference.

let originalObject = { a: 1, b: 2 };
let copiedObject = { ...originalObject };
console.log(
  "Task 32:",
  originalObject,
  copiedObject,
  originalObject === copiedObject
);

// Merging Objects:
//  ● Create two objects object1 and object2 with some overlapping
// keys.
//  ● Use the spread operator to create a new object mergedObject that
// combines the properties of object1 and object2.
//  ● Log mergedObject to the console and note which values are
// retained for the overlapping keys.

let object1 = { x: 1, y: 2 };
let object2 = { y: 99, z: 3 };
let mergedObject = { ...object1, ...object2 };
console.log("Task 33:", mergedObject);

// Updating Object Properties:
//  ● Create an object user with properties name, age, and email.
//  ● Use the spread operator to create a new object updatedUser that
// updates the email property and adds a new address property.
//  ● Log the updatedUser object to the console.

let user = { name: "Ali", age: 25, email: "ali@mail.com" };
let updatedUser = { ...user, email: "ali123@mail.com", address: "Karachi" };
console.log("Task 34:", updatedUser);

// Passing Array Elements as Arguments:
//  ● Create a function sum(a, b, c) that returns the sum of three
// numbers.
//  ● Create an array numbers with three elements.
//  ● Use the spread operator to pass the elements of numbers as
// arguments to the sum function.
//  ● Log the result to the console.

function sum(a, b, c) {
  return a + b + c;
}
let numsArr = [1, 2, 3];
console.log("Task 35:", sum(...numsArr));

// Combining Multiple Arrays:
//  ● Create a function combineArrays that takes any number of arrays
// as arguments and returns a single array containing all elements.
//  ● Use the spread operator inside the function to combine the arrays.
//  ● Call the function with multiple arrays and log the result.

function combineArrays(...arrays) {
  return [].concat(...arrays);
}
console.log("Task 36:", combineArrays([1, 2], [3, 4], [5, 6], [7, 8]));

// Rest Parameter with Spread Operator:
//  ● Create a function multiply that takes a number and any number of
// additional arguments.
//  ● Use the rest parameter to gather the additional arguments into an
// array and multiply each by the first argument.
//  ● Return an array of the results.
//  ● Call the function with appropriate arguments and log the result.

function multiply(multiplier, ...numbers) {
  return numbers.map((n) => n * multiplier);
}
console.log("Task 37:", multiply(2, 1, 2, 3));

// Spread Operator with Nested Structures:
//  ● Create a nested array nestedArray and use the spread operator to
// create a shallow copy.
//  ● Modify the inner arrays in the copied array.
//  ● Log both the original and copied arrays to observe the effect of
// shallow copying.

let nestedArray = [
  [1, 2],
  [3, 4],
];
let shallowCopy = [...nestedArray];
shallowCopy[0][0] = 99;
console.log("Task 38 original:", nestedArray);
console.log("Task 38 copy:", shallowCopy);

// Sum Function:
//  ● Create a function sum that uses the rest operator to take any number
// of arguments.
//  ● The function should return the sum of all its arguments.
//  ● Call the function with different numbers of arguments and log the
// results.

function sumRest(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}
console.log("Task 39:", sumRest(1, 2, 3, 4, 5));

// Average Function:
//  ● Create a function average that uses the rest operator to take any
// number of arguments.
//  ● The function should return the average of all its arguments.
//  ● Call the function with different numbers of arguments and log the
// results.

function average(...nums) {
  return nums.length ? nums.reduce((a, b) => a + b) / nums.length : 0;
}
console.log("Task 40:", average(10, 20, 30, 40, 50));

// First and Rest:
//  ● Create an array numbers with at least 5 elements.
//  ● Use array destructuring with the rest operator to assign the first
// element to a variable first and the remaining elements to a variable
// rest.
//  ● Log first and rest to the console.

let numList = [10, 20, 30, 40, 50];
let [first, ...rest] = numList;
console.log("Task 41: first =", first, "rest =", rest);

// Skip and Rest:
//  ● Create an array colors with at least 5 elements.
//  ● Use array destructuring with the rest operator to skip the first two
// elements and assign the remaining elements to a variable
// remainingColors.
//  ● Log remainingColors to the console.

let colors = ["red", "green", "blue", "yellow", "purple"];
let [, , ...remainingColors] = colors;
console.log("Task 42:", remainingColors);

// Basic Destructuring:
//  ● Create an object person with properties name, age, email, and
// address.
//  ● Use object destructuring with the rest operator to assign name and
// email to individual variables, and the remaining properties to a
// variable rest.
//  ● Log the variables to the console.

let person = {
  name: "Ali",
  age: 25,
  email: "ali@mail.com",
  address: "Karachi",
};
let { name, email, ...restProps } = person;
console.log("Task 43:", name, email, restProps);

// Nested Destructuring:
//  ● Create an object student with properties id, name, grades, and
// info (where info is another object with properties age and major).
//  ● Use nested destructuring with the rest operator to extract id, name,
// and major to individual variables, and the remaining properties to a
// variable rest.
//  ● Log the variables to the console.

let student = {
  id: 1,
  name: "Sara",
  grades: [90, 85, 88],
  info: { age: 20, major: "CS" },
};
let {
  id,
  name: studentName,
  info: { major },
  ...restStudent
} = student;

console.log("Task 44:", id, studentName, major, restStudent);

// Filter Even Numbers:
//  ● Create a function filterEven that uses the rest operator to take any
// number of arguments.
//  ● The function should return a new array containing only the even
// numbers.
//  ● Call the function with different numbers of arguments and log the
// results.

function filterEven(...nums) {
  return nums.filter((n) => n % 2 === 0);
}
console.log("Task 45:", filterEven(1, 2, 3, 4, 5, 6));
