// Class 3
// const numbers = [1, 2, 3, 4, 5, "add"];

// Basic destructuring
// const [a, b, c, d, e, f] = numbers;
// console.log(a, b, c, d, e, f); // Output: 1 2 3 4 5

// Skipping elements
// const [a, b, , d, , f] = numbers;
// console.log(a, b, d, f); // Output: 1 2 3 4 5

// Default values
// const [a, b, c, d, e, f = 6] = numbers;
// console.log(a, b, c, d, e, f); // Output: 1 2 3 4 5 6

// Rest operator
// const [a, b, ...rest] = numbers;
// console.log(a, b); // Output: 1 2
// console.log(rest); // Output: [3, 4, 5]
// console.log(...rest); // Output: 3 4 5

// Swapping variables
// let a = 2,
//   b = 3;
// [a, b] = [b, a];
// console.log(a, b); // Output: 2 1

// Nested destructuring
// const nestedArray = [1, 2, [3, 4], 5];
// const [a, b, [c, d], e] = nestedArray;
// console.log(a, b, c, d, e); // Output: 1 2 3 4 5

// Task 1
// let x = 15;
// let y = 25;
// [x, y] = [y, x];
// console.log(x, y); // Output: 2 1
// Task 2
// const score = [87, 92, 76, 81, 95];
// const [top1, top2, , , top3] = score;
// console.log(top3, top2, top1); // Output: 95 92 87
// Task 3
// const info = ["Alice", 30, "Engineer", "New York"];
// const [name, , profession] = info;
// console.log(name, profession); // Output: Alice Engineer
// Task 4
// const fruits = ["Apple"];
// const [fruit1, fruit2 = "Banana"] = fruits;
// console.log(fruit1, fruit2); // Output: Apple Banana

// Task 5
// const numbers = [1, [4, 5, 6]];
// // 1,4,5 ko ek array mein aur 6 alag
// const [first, [second, third, num04]] = numbers;
// const num01 = [first, second, third];

// console.log(num01); // [1, 4, 5]
// console.log(num04); // 6

// use destructuring to extract 1, 4,5 and 6 in to seperate values
// 1,4,5 in num01 and 6 in num04

// Object Destructuring
// const person = {
//   name: "John",
//   age: 30,
// };
// Basic destructuring
// const { name, age } = person;
// console.log(name, age); // Output: John 30

// default values
// const { name: personName, age: personAge, city = "karachi" } = person;
// console.log(personName, personAge, city); // Output: John 30 karachi

// Nested destructuring
// const employee = {
//   id: 1,
//   details: {
//     name: "Jane",
//     position: "Developer",
//   },
// };
// const {
//   id,
//   details: { name: empName, position },
// } = employee;
// console.log(id, empName, position); // Output: 1 Jane Developer

// Destructuring in function parameters
// function display({ name, age }) {
//   console.log(` Name:${name}, Age:${age}`);
// }
// const person = { name: "John", age: 30 };
// display(person); // Output: John 30

// Task1
// const student = { id: 101, name: "Alice", grade: "A" };
// const { id: studentId, name: studentName } = student;
// console.log(studentId, studentName); // Output: 101 Alice

// task2
// function displayProduct({ id, name }) {
//   console.log(`ID: ${id}, Name: ${name}`);
// }
// const product = { id: 1, name: "Laptop", price: 1000 };
// displayProduct(product); // Output: ID: 1, Name: Laptop

// pass values and pass reference

// pass by value
// let num1 = 10;
// let num2 = num1; // pass by value
// num2 = 20;
// console.log(num1); // 10
// console.log(num2); // 20

// pass by reference
// let obj1 = { name: "john" };
// let obj2 = obj1; // pass by reference

// console.log(obj1.name); // john
// console.log(obj2.name); // john
// obj2.name = "alice";
// console.log(obj1.name); // alice
// console.log(obj2.name); // alice
// // both obj1 and obj2 point to the same memory location

// let arr1 = [1, 2, 3];
// let arr2 = arr1; // pass by reference
// arr2.push(4);
// console.log(arr1); // [1, 2, 3, 4]
// console.log(arr2); // [1, 2, 3, 4]

// const student = { id: 101, name: "Alice" };
// console.log(student.name); // Alice
// const { name } = student;
// let newStudent = name;
// newStudent = "ali";
// console.log(sudent.name); // Alice
// console.log(newStudent); // ali
// console.log(name); // ali
// console.log(student.name); // Alice
// student2 = student;
// student2.name = "bob";
// console.log(student.name); // bob
// console.log(student2.name); // bob

// object methods

// Object.keys;
// Object.values;
// object.freeze
// Object.entries;

// const student = { id: 101, name: "Alice" };
// console.log(Object.keys(student)); // ['id', 'name']
// console.log(Object.values(student)); // [101, 'Alice']
// console.log(Object.freeze(student)); // {id: 101, name: 'Alice'}
// student.name = "Bob"; // will not change the name property

// console.log(Object.entries(student)); // [['id', 101], ['name', 'Alice']]
// for (let [key, value] of Object.entries(student)) {
//   console.log(`${key}: ${value}`);
// }

// function
// es5 to es6
// Normal function
// function add(a, b) {
//   return a + b;
// }

// arrow function
// const add = (a, b) => a + b;
// console.log(add(2, 3)); // 5

// single parameter
// const square = (x) => x * x;
// console.log(square(4)); // 16

// default parameters
// const greet = (name = "Guest") => `Hello, ${name}!`;
// console.log(greet()); // Hello, Guest!
// console.log(greet("Alice")); // Hello, Alice!

// higher order function
// function operation(a, b, func) {
//   return func(a, b);
// }
// const add = (a, b) => a + b;
// const multiply = (a, b) => a * b;
// console.log(operation(2, 3, add)); // 5
// console.log(operation(2, 3, multiply)); // 6

// array methods

// forEach
// const arr = [1, 2, 3, 4, 5];
// arr.forEach((num) => console.log(num * 2)); // 2 4 6 8 10

// map
// const numbers = [1, 2, 3, 4, 5];
// const squared = numbers.map((num) => num * num);
// console.log(squared); // [1, 4, 9, 16, 25]

// find
// const found = numbers.find((num) => num > 2);
// console.log(found); // 4

// filter
// const evenNumbers = numbers.filter((num) => num % 2 === 0);
// console.log(evenNumbers); // [2, 4]

// reduce
// const sum = numbers.reduce((acc, num) => acc + num, 0);
// console.log(sum); // 15
