// Global Scope
//  ● Declare a variable using var outside of any function or block.
//  ● Declare a variable using let outside of any function or block.
//  ● Declare a variable using const outside of any function or block.
//  ● Log all three variables to the console.
//  ● Are they accessible globally?

var a = "I am var";
let b = "I am let";
const c = "I am const";
console.log("Task 1:", a, b, c);

// Function Scope
//  ● Create a function and declare a variable using var inside the
// function.
//  ● Declare a variable using let inside the function.
//  ● Declare a variable using const inside the function.
//  ● Try to log all three variables to the console outside the function.
//  ● What do you observe?

function checkScope() {
  var x = "I am var inside function";
  let y = "I am let inside function";
  const z = "I am const inside function";
  console.log("Task 2 (inside function):", x, y, z);
}
checkScope();

// console.log(x, y, z); ReferenceError: not defined

// Block Scope:
//  ● Use an if statement and declare a variable using var inside the
// block.
//  ● Declare a variable using let inside the block.
//  ● Declare a variable using const inside the block.
//  ● Try to log all three variables to the console outside the block.
//  ● What do you observe?

if (true) {
  var m = "I am var inside block";
  let n = "I am let inside block";
  const o = "I am const inside block";
  console.log("Task 3 (inside block):", m, n, o);
}
console.log("Task 3 (outside block - var):", m); // works
// console.log("Task 3 (outside block - var):", n); //ReferenceError: n is not defined
// console.log("Task 3 (outside block - var):", o); // ReferenceError: o is not defined

// Hoisting with var:
//  ● Write code where you log a var variable before it is declared.
//  ● What value do you get?

// console.log("Task 4:", hoistedVar); // undefined
var hoistedVar = "Var Vaiable Now assigned";

// Hoisting with let and const:
//  ● Write code where you log a let variable before it is declared.
//  ● Write code where you log a const variable before it is declared.
//  ● What kind of error do you get?

// console.log("Task 5:", hoistedLet); // ReferenceError: Cannot access 'hoistedLet' before initialization
let hoistedLet = "let Vaiable Now assigned";

// console.log("Task 5:", hoistedConst); // ReferenceError: Cannot access 'hoistedConst' before initialization
const hoistedConst = "const Vaiable Now assigned";

// Re-declaration:
//  ● Try to declare the same variable name twice using var.
//  ● Try to declare the same variable name twice using let.
//  ● Try to declare the same variable name twice using const.
//  ● What happens in each case?

var redeclareVar = 10;
var redeclareVar = 20;
console.log("Task 6 (var):", redeclareVar);

// let redeclareLet = 30;
// let redeclareLet = 40; // SyntaxError: Identifier 'redeclareLet' has already been declared
// console.log(redeclareLet);

// const redeclareConst = 50;
// const redeclareConst = 60; // SyntaxError: Identifier 'redeclareConst' has already been declared
// console.log(redeclareConst);

// Re-assignment:
//  ● Declare a variable using var and assign it a value. Then reassign it a
// new value.
//  ● Declare a variable using let and assign it a value. Then reassign it a
// new value.
//  ● Declare a variable using const and assign it a value. Then reassign it
// a new value.
//  ● What happens in each case?

var reVar = 10;
reVar = 20;
console.log("Task 7 (var):", reVar);

let reLet = 30;
reLet = 40;
console.log("Task 7 (let):", reLet);

const reConst = 50;
// reConst = 60; // Not allowed TypeError: Assignment to constant variable.
console.log(reConst);

// Temporal Dead Zone (TDZ):
//  ● Declare a let variable inside a block but try to log it before the
// declaration.
//  ● Declare a const variable inside a block but try to log it before the
// declaration.
//  ● What error do you get? Why?

// console.log(tdzLet); // ReferenceError: Cannot access 'tdzLet' before initialization
let tdzLet = "inside TDZ";

// console.log(tdzConst); // ReferenceError: Cannot access 'tdzConst' before initialization/
let tdzConst = "inside TDZ";

// When to use var, let, and const:
//  ● Write a piece of code to demonstrate a good use case for var.
//  ● Write a piece of code to demonstrate a good use case for let.
//  ● Write a piece of code to demonstrate a good use case for const.

function useVarExample() {
  for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log("Task 9 (var loop):", i), 100);
    // console.log(i);
  }
}
useVarExample(); // will print 3,3,3 due to function scope

// let → block scope (modern loops)
function useLetExample() {
  for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log("Task 9 (let loop):", j), 100);
    // console.log(j);
  }
}
useLetExample(); // will print 0,1,2

const PI = 3.14159;
console.log("Task 9 (const): PI =", PI);

// String Interpolation:
//  ● Create variables for a person's first name and last name.
//  ● Use a template literal to create a full name string and log it to the
// console.

let firstName = "Shoaib";
let lastName = "Memon";
let fullName = `${firstName} ${lastName}`;
console.log("Task 10:", fullName);

// Multi-line Strings:
//  ● Use a template literal to create a multi-line string (e.g., an address) and
// log it to the console.

let address = `House - 123
Street ABC
Karachi, Pakistan`;
console.log("Task 11:\n" + address);

// Simple Expressions:
//  ● Create variables for two numbers.
//  ● Use a template literal to create a string that includes the sum of the
// numbers.
//  ● Log the string to the console.

let num1 = 5;
let num2 = 7;
console.log(`Task 12: The sum of ${num1} and ${num2} is ${num1 + num2}`);

// Function Calls:
//  ● Create a function that takes two numbers and returns their product.
//  ● Use a template literal to call this function inside a string and log the
// result to the console.

function multiply(a, b) {
  return a * b;
}
console.log(`Task 13: The return is ${multiply(4, 6)}`);

// Creating a Tagged Template:
//  ● Write a simple tag function that takes a template string and logs it.
//  ● Use this tag function with a template literal.

function tag(strings, ...values) {
  console.log("Task 14 (tagged):", strings, values);
  return strings[0] + values.join("-");
}
let tagged = tag`Hello ${"World"}! This is ${"JS"}`;
console.log("Task 14 Result:", tagged);

// Formatting:
//  ● Write a tag function that formats a string by making it uppercase.
//  ● Use this tag function with a template literal and log the result.

function upper(strings, ...values) {
  let str = strings[0];
  values.forEach((v, i) => {
    str += String(v).toUpperCase() + (strings[i + 1] || "");
  });
  return str;
}
let formatted = upper`Hello ${"world"} and ${"students"}`;
console.log("Task 15 Result:", formatted);
