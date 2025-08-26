//  Array Destructuring
//In JavaScript, array destructuring is a convenient way to unpack values from arrays (or properties from objects) into distinct variables.
const numbers = [10, 20, 30];

const [a, b, c] = numbers;

console.log(a); 
console.log(b); 
console.log(c); 

//Skipping Items
const colors = ["red", "green", "blue", "yellow"];

const [first, , third] = colors;

console.log(first); 
console.log(third); 
//Default Values
// If the array doesn’t have enough values, you can provide defaults:
const fruits = ["apple"];

const [fruit1, fruit2 = "banana"] = fruits;

console.log(fruit1); 
console.log(fruit2); 
//Rest Operator (...)
const scores = [90, 85, 88, 76, 95];

const [top1, top2, ...rest] = scores;

console.log(top1); 
console.log(top2); 
console.log(rest); 
//Swapping Variables
let x = 1;
let y = 2;

[x, y] = [y, x];

console.log(x); 
console.log(y); 
//Nested Destructuring
const nested = [1, [2, 3]];

const [one, [two, three]] = nested;

console.log(one);   
console.log(two);   
console.log(three); 
//Task1
//let x = 15;
//let y = 25;
 //Swap the values using array destructuring (without using a third variable).
 //Task2
 //const scores = [87, 92, 76, 81, 95];
 //Use destructuring to extract the top 3 scores and print them.
 //Task 3
 //const info = ["Aman", 20, "karachi", "Developer"];
 //Extract only the name and profession using destructuring (ignore the other values).
//Task 4
//const fruits = ["Apple"];
// Use destructuring to extract two fruits.
// If the second fruit does not exist, assign a default value "Banana".
//Task 5
//const numbers = [1, [4, 5, 6]];
// Use destructuring to extract 1, 4, 5, and 6 into separate variables.

//What is Object Destructuring?
//Object destructuring allows you to unpack properties from an object into separate variables in a clean and concise way.
const student = {
    name: "Alice",
    age: 21,
    city: "New York"
  };
  
  const { name, age, city } = student;
  
  console.log(name); 
  console.log(age);  
  console.log(city); 
//Rename Variables
const user = { id: 101, username: "john_doe" };

const { username: userName } = user;

console.log(userName); 
//Default Values
const person = { name: "Bob" };

const { name1, age2 = 30 } = person;

console.log(name1); 
console.log(age2);
//Nested Destructuring
const employee = {
    id: 1,
    details: {
      name: "Sarah",
      position: "Manager"
    }
  };
  
  const { details: { names, positions } } = employee;
  
  console.log(names);     
  console.log(positions); 
  //Destructuring in Function Parameters
  function printUser({ name, age }) {
    console.log(`Name: ${name}, Age: ${age}`);
  }
  
  const user1 = { name: "ali", age: 28 };
  printUser(user1);
  //Task1
  //const car = {
//   brand: "Toyota",
//   model: "Corolla",
//   year: 2020
// };
//  Use object destructuring to extract brand and year into separate variables and print them.

//const car = {
//     brand: "Toyota",
//     model: "Corolla",
//     year: 2020
//   };
//    Use object destructuring to extract brand and year into separate variables and print them.

//Pass by Value

// In JavaScript, primitive data types (Number, String, Boolean, null, undefined, Symbol, BigInt) are passed by value.

// That means a copy of the value is passed.

// Changing one variable does not affect the other.
let t = 10;
let v = a;  

v = 20;

console.log(t); 
console.log(v);
//Pass by Reference

// Objects and Arrays are passed by reference.

// That means the reference (address in memory) is passed, not the actual value.

// Changing one variable affects the other, because both point to the same memory.
let person1 = { name: "John" };
let person2 = person1;  

person2.name = "Alice";

console.log(person1.name); 
console.log(person2.name); 
let arr1 = [1, 2, 3];
let arr2 = arr1; 
arr2.push(4);

console.log(arr1); 
console.log(arr2)
//Object Methods
//Object.keys()
// Returns an array of keys from the object.
const person5 = { name: "John", age: 25, city: "New York" };

console.log(Object.keys(person5));
//Object.values()

// Returns an array of values from the object.
const person4 = { name: "John", age: 25, city: "New York" };

console.log(Object.values(person4));
//Object.freeze()

// Freezes an object: no changes allowed (no add, delete, or update).

// Makes the object immutable.
const car = { brand: "Toyota", year: 2020 };

Object.freeze(car);

car.year = 2022;   //  Won’t change
car.color = "Red"; //  Won’t add
console.log(car);
//Object.entries()

// Returns an array of [key, value] pairs (useful for looping).

const person8 = { name: "John", age: 25 };

console.log(Object.entries(person8));
// [ ["name", "John"], ["age", 25] ]

// You can loop through it
for (let [key, value] of Object.entries(person8)) {
  console.log(key, ":", value);
}
// name : John
// age : 25
//Arrow Function

// A shorter syntax for writing functions (introduced in ES6).

// Doesn’t have its own this keyword (inherits from parent).
// Normal function
function add(a, b) {
    return a + b;
  }
  
  // Arrow function
  const addArrow = (a, b) => a + b;
  
  console.log(addArrow(5, 3)); 
  //Higher Order Function

// A function that takes another function as argument or returns a function.

// Used a lot with arrays (map, filter, reduce).
// Function as argument
function greet(name) {
    return "Hello, " + name;
  }
  
  function processUserInput(callback) {
    let name = "Alice";
    return callback(name);
  }
  
  console.log(processUserInput(greet)); 
  const numbers6 = [1, 2, 3, 4];
  const doubled = numbers6.map(num => num * 2);
  
  console.log(doubled); 
  //Default Parameter

// You can give default values to function parameters (ES6).

// If the value is not passed, the default is used.
function multiply(a, b = 2) {
    return a * b;
  }
  
  console.log(multiply(5));    
  console.log(multiply(5, 3));
  //Array Methods
//   map()

// Creates a new array by applying a function to each element.
const r = [1, 2, 3, 4];
const squared = r.map(num => num * num);

console.log(squared);
//filter()

// Returns a new array with elements that pass a condition.

const ages = [15, 22, 17, 30, 19];
const adults = ages.filter(age => age >= 18);

console.log(adults); // [22, 30, 19]
//forEach()

// Executes a function for each element in the array.

// Does not return a new array (just iterates).
const f = ["Apple", "Banana", "Mango"];

f.forEach(fruit => console.log("I like " + fruit));
// I like Apple
// I like Banana
// I like Mango
  
  //find()

// Returns the first element that matches a condition.
const n = [5, 12, 8, 130, 44];
const found = n.find(num => num > 10);

console.log(found); // 12 (first number > 10)
// reduce()

// Reduces an array to a single value (like sum, product, etc).
const m = [1, 2, 3, 4, 5];
const sum = m.reduce((total, num) => total + num, 0);

console.log(sum); // 15



