// console.log("class 2");

// var let const

// var is global
// var one = 2;
// var one = 10;
// console.log(one);

// let is block scope
// let x = 10;
// let x =10  // redeclear not allowed
// console.log(x);

// const is block scope

// const fs = 12;
// const fs = 14;
// fs = 16;
// console.log(fs);

// let one = 1;
// let two = 10;
// console.log(`${two}${one}`);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 1; i <= arr.length; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
//   else {
//     console.log(i);
//   }
// }

// Hoisting

// x = 10;
// var x;
// console.log(x);

// y = 10;
// let y;
// console.log(y);

// test();

// function test() {
//   //   console.log("test");
//   console.log(x);
// }
// test();
// var x = 10;

// test();

// Javsacript Tempelate String
// let str = `this is my list
// 1 - bat
// 2 - ball
// `;
// console.log(str);

// Javsacript Tempelate Literal
// interpolation
// let firstName = "first";
// let lastName = "last Name";
// let fullText = `This is ${firstName} ${lastName} Profile`;
// console.log(fullText);

// Ternary Operator
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let arr = 1;
// let arr = 2;
// arr.map((ar) => {
// let check = arr % 2 ? `even ${arr}` : `odd ${arr}`;
// console.log(check);
// });

// age, 30 less then es 5 true, class mornign true
// false

// let age = prompt("enter age");
// let es5 = prompt("es% ati he true or false");
// let shift = prompt("class morrning true or false");

// let agetrue = Number(age) <= 30 ? true : false;
// let es5true = es5 == "true" ? true : false;
// let shiftrue = shift == "true" ? true : false;

// let status = agetrue && es5true && shiftrue ? "eligiable" : "not eligable";
// let eligable = agetrue && es5true && shiftrue;
// let notEligable = agetrue && es5true && shiftrue;
// console.log(status);

// let tt =
//   (Number(age) <= 30 ? true : false) &&
//   (es5 == "true" ? true : false) &&
//   (shift == "true" ? true : false)
//     ? "eligiable"
//     : "not eligable";

// let tt =
//   Number(age) <= 30 && es5 == "true" && shift == "true"
//     ? "eligiable"
//     : "not eligable";

// console.log(tt);

// short Circuit Operator
// && opertor
// || or operator

// []  { }  /// spread operator

// let a = [1, 2, 3];
// let b = [4, 5, 6];
// let c = [...a, ...b];
// console.log(c, "array spread");
// console.log(...a, ...b, "spread opertor");

// let std = {
//   name: "ali",
//   class: 5,
// };
// console.log(std["name"]);
// let std1 = {
//   age: 20,
//   year: 2025,
// };
// let test = { ...std, ...std1 };
// console.log(test);

// Rest Operator /// parameter

// function test(...more) {
//   console.log(a);
//   console.log(b);
//   console.log(...more);
//   console.log(a, b, more);

//
// test(1, 2, 3, 4, 5);

// function test(...more) {
//   console.log(more);
// }

// test(1, 2);

// let arr = { age: 12, year: 20 };
// let arr1 = { age: 13, year: 21 };
// let obj = [...arr, ...arr1];
// console.log(Object.entries(arr));
// console.log(Object.entries(arr1));
// console.log(obj);
// console.log(arr[1]);
// console.log(obj[0]);
