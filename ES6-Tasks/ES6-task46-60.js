// Combine and Sort Arrays:
//  ● Create a function combineAndSort that uses the rest operator to
// take any number of arrays.
//  ● The function should combine all the arrays into one and return the
// sorted result.
//  ● Call the function with different arrays and log the results.

function combineAndSort(...arrays) {
  return [].concat(...arrays).sort((a, b) => a - b);
}
console.log("Task 46:", combineAndSort([3, 1], [4, 2]));

// Basic Destructuring:
//  ● Create an array fruits with the elements "apple", "banana", and
// "cherry".
//  ● Use destructuring to assign the first element to a variable
// firstFruit, the second to secondFruit, and the third to
// thirdFruit.
//  ● Log the variables to the console

let fruits = ["apple", "banana", "cherry"];
let [firstFruit, secondFruit, thirdFruit] = fruits;
console.log("Task 47:", firstFruit, secondFruit, thirdFruit);

// Skipping Elements:
//  ● Create an array colors with the elements "red", "green", "blue",
// "yellow".
//  ● Use destructuring to assign the first element to primaryColor and
// the third element to tertiaryColor.
//  ● Log the variables to the console.

let colorList = ["red", "green", "blue", "yellow"];
let [primaryColor, , tertiaryColor] = colorList;
console.log("Task 48:", primaryColor, tertiaryColor);

// Rest Operator:
//  ● Create an array numbers with the elements 1 through 5.
//  ● Use destructuring to assign the first element to firstNumber and
// the rest of the elements to remainingNumbers.
//  ● Log the variables to the console.

let numbersArr = [1, 2, 3, 4, 5];
let [firstNumber, ...remainingNumbers] = numbersArr;
console.log("Task 49:", firstNumber, remainingNumbers);

// Basic Destructuring:
//  ● Create an object person with properties name, age, and city.
//  ● Use destructuring to assign the properties to variables name, age,
// and city.
//  ● Log the variables to the console.

let personObj = { name: "Hina", age: 22, city: "Lahore" };
let { name: pname, age: page, city } = personObj;
console.log("Task 50:", pname, page, city);

// Renaming Variables:
//  ● Create an object car with properties make, model, and year.
//  ● Use destructuring to assign the properties to variables carMake,
// carModel, and carYear.
//  ● Log the variables to the console.

let car = { make: "Toyota", model: "Corolla", year: 2020 };
let { make: carMake, model: carModel, year: carYear } = car;
console.log("Task 51:", carMake, carModel, carYear);

// Default Values:
//  ● Create an object settings with properties theme and language.
//  ● Use destructuring to assign the properties to variables theme and
// language, and provide a default value of "English" for language.
//  ● Log the variables to the console.

let settings = { theme: "dark" };
let { theme, language = "English" } = settings;
console.log("Task 52:", theme, language);

// Array of Arrays:
//  ● Create an array nestedArray with the elements [1, 2], [3, 4],
// and [5, 6].
//  ● Use nested destructuring to assign the first elements of each
// sub-array to variables a, b, and c.
//  ● Log the variables to the console.

let nestedArray = [
  [1, 2],
  [3, 4],
  [5, 6],
];
let [[a], [b], [c]] = nestedArray;
console.log("Task 53:", a, b, c);

// Object within an Object:
//  ● Create an object profile with properties username, details
// (which is another object with properties email and address).
//  ● Use nested destructuring to assign username, email, and address
// to variables.
//  ● Log the variables to the console.

let profile = {
  username: "shoaib",
  details: { email: "s@mail.com", address: "Karachi" },
};
let {
  username,
  details: { email: userEmail, address },
} = profile;
console.log("Task 54:", username, userEmail, address);

// Mix of Arrays and Objects:
//  ● Create an object data with properties id, info (which is an array
// with elements {name: "Alice"} and {age: 25}).
//  ● Use nested destructuring to assign id, name, and age to variables.
//  ● Log the variables to the console.

let data = { id: 101, info: [{ name: "Alice" }, { age: 25 }] };
let {
  id: dataId,
  info: [{ name: dataName }, { age: dataAge }],
} = data;
console.log("Task 55:", dataId, dataName, dataAge);

// Array Parameters:
//  ● Create a function printCoordinates that takes an array [x, y]
// as a parameter.
//  ● Use destructuring in the function parameter to extract x and y.
//  ● Log x and y inside the function.
//  ● Call the function with different coordinates.

function printCoordinates([x, y]) {
  console.log("Task 56:", x, y);
}
printCoordinates([10, 20]);

// Object Parameters:
//  ● Create a function displayUser that takes an object {name, age}
// as a parameter.
//  ● Use destructuring in the function parameter to extract name and age.
//  ● Log name and age inside the function.
//  ● Call the function with different user objects.

function displayUser({ name, age }) {
  console.log("Task 57:", name, age);
}
displayUser({ name: "Sana", age: 30 });

// List Property Names:
//  ● Create an object book with properties title, author, and year.
//  ● Use Object.keys() to get an array of the property names of the
// book object.
//  ● Log the array to the console.

let book = { title: "JS Guide", author: "John", year: 2023 };
console.log("Task 58:", Object.keys(book));

// Count Properties:
//  ● Create an object student with properties name, age, grade, and
// school.
//  ● Use Object.keys() to get an array of the property names and
// determine the number of properties in the student object.
//  ● Log the number of properties to the console.

let studentObj = { name: "Sara", age: 21, grade: "A", school: "XYZ" };
console.log("Task 59: Total properties =", Object.keys(studentObj).length);

// Iterate Over Keys:
//  Create an object product with properties name, price, and category.
//  Use Object.keys() to get an array of the property names and iterate
// over this array to log each property name and its corresponding value.

let product = { name: "Laptop", price: 50000, category: "Electronics" };
Object.keys(product).forEach((key) => {
  console.log(`Task 60: ${key} = ${product[key]}`);
});
