// Conditional Logic:
//  ● Create a variable for the current hour.
//  ● Use a template literal to display a different message depending on
// whether it's morning (before 12 PM) or afternoon (after 12 PM).

let currentHour = new Date().getHours();
let message = `${currentHour < 12 ? "Good morning!" : "Good afternoon!"}`;
console.log("Task 16:", message);

// Loops within Template Literals:
//  ● Create an array of items (e.g., a shopping list).
//  ● Use a template literal to generate an HTML list (<ul> and <li>
// elements) from the array and log it to the console.

let shoppingList = ["Milk", "Bread", "Eggs"];
let htmlList = `<ul>
${shoppingList.map((item) => `<li>${item}</li>`).join("\n")}
</ul>`;
console.log("Task 17:\n", htmlList);

// Escaping Backticks:
//  ● Create a string that includes a backtick character using a template
// literal.
//  ● Log the string to the console.

let backtickString = `This is a string with a backtick \``;
console.log("Task 18:", backtickString);

// Nested Template Literals:
//  ● Create nested template literals to build a more complex string, such as
// a nested HTML structure (e.g., a table with rows and cells).
//  ● Log the result to the console.

let table = `
<table>
  ${[1, 2, 3]
    .map(
      (row) => `
    <tr>
      ${[1, 2, 3].map((col) => `<td>${row * col}</td>`).join("")}
    </tr>
  `
    )
    .join("")}
</table>
`;
console.log("Task 19:\n", table);

// Simple Condition:
//  ● Create a variable age.
//  ● Use the ternary operator to assign a variable canVote the value
// "Yes" if age is 18 or older, and "No" otherwise.
//  ● Log canVote to the console.

let age = 27;
let canVote = age >= 18 ? "Yes" : "No";
console.log("Task 20: Can vote?", canVote);

// Even or Odd:
//  ● Create a variable number.
//  ● Use the ternary operator to assign a variable evenOrOdd the value
// "Even" if number is even, and "Odd" if it's odd.
//  ● Log evenOrOdd to the console.

let number = 7;
let evenOrOdd = number % 2 === 0 ? "Even" : "Odd";
console.log("Task 21:", number, "is", evenOrOdd);

// Grade Evaluation:
//  Create a variable score.
//  Use the ternary operator to assign a variable grade based on the following conditions:
//  ● "A" if score is 90 or above.
//  ● "B" if score is 80 or above.
//  ● "C" if score is 70 or above.
//  ● "D" if score is 60 or above.
//  ● "F" otherwise.
//  Log grade to the console.

let score = 85;
let grade =
  score >= 90
    ? "A"
    : score >= 80
    ? "B"
    : score >= 70
    ? "C"
    : score >= 60
    ? "D"
    : "F";
console.log("Task 22: Grade =", grade);

// Login Status:
//  ● Create a variable isLoggedIn.
//  ● Use the ternary operator and logical operators to assign a variable
// statusMessage the value "Welcome back!" if isLoggedIn is true,
// and "Please log in" if isLoggedIn is false.
//  ● Log statusMessage to the console.

let isLoggedIn = false;
let statusMessage = isLoggedIn ? "Welcome back!" : "Please log in";
console.log("Task 23:", statusMessage);

// Discount Eligibility:
//  ● Create variables isMember and purchaseAmount.
//  ● Use the ternary operator and logical operators to assign a variable
// discount the value 10% of purchaseAmount if isMember is true
// and purchaseAmount is greater than 100, and 0 otherwise.
//  ● Log discount to the console.

let isMember = true;
let purchaseAmount = 150;
let discount = isMember && purchaseAmount > 100 ? purchaseAmount * 0.1 : 0;
console.log("Task 24: Discount =", discount);

// Determine Max Value:
//  ● Create a function maxValue(a, b) that returns the larger of the two
// numbers using the ternary operator.
//  ● Call the function with two numbers and log the result.

function maxValue(a, b) {
  return a > b ? a : b;
}
console.log("Task 25: Max value =", maxValue(10, 20));

// Greeting Message:
//  ● Create a function greet(name) that returns a greeting message. If
// name is not provided (or is an empty string), it should return "Hello,
// guest!", otherwise, it should return "Hello, [name]!".
//  ● Call the function with and without a name and log the result.

function greet(name) {
  return name && name.trim() !== "" ? `Hello, ${name}!` : "Hello, guest!";
}
console.log("Task 26:", greet("Shoaib"));
console.log("Task 26 (empty):", greet(""));

// Mapping Values:
//  ● Create an array of numbers.
//  ● Use the map method with a ternary operator to create a new array
// where each number is doubled if it is even and tripled if it is odd.
//  ● Log the new array to the console.

let nums = [1, 2, 3, 4, 5];
let mapped = nums.map((n) => (n % 2 === 0 ? n * 2 : n * 3));
console.log("Task 27:", mapped);

// Filtering Values:
//  ● Create an array of strings.
//  ● Use the filter method with a ternary operator to create a new array
// that only includes strings with a length greater than 3.
//  ● Log the new array to the console.

let words = ["hi", "apple", "cat", "banana"];
let filtered = words.filter((w) => w.length > 3);
console.log("Task 28:", filtered);

// Copying an Array:
//  ● Create an array originalArray with some elements.
//  ● Use the spread operator to create a copy of originalArray called
// copiedArray.
//  ● Log both arrays to the console to verify they are the same but not the
// same reference.

let originalArray = [1, 2, 3];
let copiedArray = [...originalArray];
console.log(
  "Task 29:",
  originalArray,
  copiedArray,
  originalArray === copiedArray
);

// Merging Arrays:
//  ● Create two arrays array1 and array2.
//  ● Use the spread operator to create a new array mergedArray that
// combines the elements of array1 and array2.
//  ● Log mergedArray to the console.
let array1 = [1, 2];
let array2 = [3, 4];
let mergedArray = [...array1, ...array2];
console.log("Task 30:", mergedArray);
