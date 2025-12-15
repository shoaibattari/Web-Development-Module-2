// ===============================
// ES6 Advanced Practice Assignment
// 180 Questions with Answers
// ===============================

// =================================
// 1. Arrow Functions (20 Questions)
// =================================

// Q1: Convert a regular function named calculateTax into an arrow function
const calculateTax = (price, tax) => price + tax;
console.log(calculateTax(200, 50)); // 250

// Q2: Create an arrow function doublePrice that doubles a price value
const doublePrice = (price) => price * 2;
console.log(doublePrice(150)); // 300

// Q3: Rewrite a function returning a product object using arrow function
const createProduct = (name, price) => ({ name, price });
console.log(createProduct("Keyboard", 1500));

// Q4: Why does an arrow function not have its own 'this'?
// Answer: Arrow functions inherit 'this' from the enclosing scope

// Q5: Convert multi-line function generateBill into arrow
const generateBill = (items) => {
  let total = 0;
  for (let price of items) total += price;
  return total;
};
console.log(generateBill([100, 200, 300]));

// Q6: Arrow function that returns length of a username
const usernameLength = (username) => username.length;
console.log(usernameLength("Ali Raza")); // 8

// Q7: Convert arrow function to implicit return
const square = (n) => n * n;
console.log(square(5)); // 25

// Q8: Arrow function returning today's date
const today = () => new Date();
console.log(today());

// Q9: Rewrite calculateDiscount(price, percent) as arrow
const calculateDiscount = (price, percent) => price - (price * percent) / 100;
console.log(calculateDiscount(1000, 10)); // 900

// Q10: What will (() => 10)() return and why?
console.log((() => 10)()); // 10. Returns 10 due to implicit return

// Q11: Why can't arrow functions be used as constructors?
// Answer: Arrow functions do not have their own 'this' and cannot be used with 'new'

// Q12: Arrow function returns true if age >= 18
const isAdult = (age) => age >= 18;
console.log(isAdult(20)); // true

// Q13: Arrow returning object {status:"success"}
const getStatus = () => ({ status: "success" });
console.log(getStatus());

// Q14: Arrow function to format greeting
const greet = (name) => `Hello, ${name}`;
console.log(greet("Sara"));

// Q15: Difference function() vs ()=> for this
// function() has its own 'this'; arrow inherits from parent scope

// Q16: Arrow function that squares numbers in array
const nums = [2, 3, 4];
const squares = nums.map((n) => n * n);
console.log(squares);

// Q17: calculateTotal(cartItems) returns sum
const calculateTotalCart = (cartItems) => cartItems.reduce((a, b) => a + b, 0);
console.log(calculateTotalCart([100, 200, 300]));

// Q18: Arrow returning nested object
const createUser = (name, age) => ({ profile: { name, age } });
console.log(createUser("Ali", 20));

// Q19: Remove spaces from string
const removeSpaces = (str) => str.replace(/\s+/g, "");
console.log(removeSpaces("Hello World"));

// Q20: Fix arrow function returning object without parentheses
const getProduct = (id, name) => ({ id, name });
console.log(getProduct(1, "Mouse"));

// =================================
// 2. Rest Parameters (20 Questions)
// =================================

// Q1: countOrders(...orderIds)
const countOrders = (...orderIds) => orderIds.length;
console.log(countOrders(101, 102, 103)); // 3

// Q2: sumAmounts(...amounts)
const sumAmounts = (...amounts) => amounts.reduce((a, b) => a + b, 0);
console.log(sumAmounts(100, 200, 300)); // 600

// Q3: Why rest param must be last? Answer: JS requires ...rest to capture remaining args

// Q4: Filter only string values
const filterStrings = (...values) =>
  values.filter((v) => typeof v === "string");
console.log(filterStrings(1, "Ali", true, "Sara")); // ["Ali","Sara"]

// Q5: mergeCustomers(...customerLists)
const mergeCustomers = (...customerLists) => [].concat(...customerLists);
console.log(mergeCustomers(["Ali"], ["Sara"], ["Ayesha"]));

// Q6: Largest number from rest
const maxNumber = (...nums) => Math.max(...nums);
console.log(maxNumber(10, 20, 5)); // 20

// Q7: joinKeywords(...words)
const joinKeywords = (...words) => words.join(",");
console.log(joinKeywords("HTML", "CSS", "JS")); // "HTML,CSS,JS"

// Q8: Multiply all scores
const multiplyScores = (...scores) => scores.reduce((a, b) => a * b, 1);
console.log(multiplyScores(2, 3, 4)); // 24

// Q9: Why function(a,...rest,b) fails? Answer: rest must be last param

// Q10: Product names starting with A
const products = ["Apple", "Banana", "Avocado"];
const productsA = products.filter((p) => p.startsWith("A"));
console.log(productsA); // ["Apple","Avocado"]

// Q11: Count number params
const countNumbers = (...vals) =>
  vals.filter((v) => typeof v === "number").length;
console.log(countNumbers(1, "a", 3, true)); // 2

// Q12: getLastValue(...values)
const getLastValue = (...values) => values[values.length - 1];
console.log(getLastValue(10, 20, 30)); // 30

// Q13: Separate passed/failed scores
const separateScores = (...scores) => ({
  passed: scores.filter((s) => s >= 50),
  failed: scores.filter((s) => s < 50),
});
console.log(separateScores(30, 60, 90, 45));

// Q14: Reverse all arguments
const reverseArgs = (...args) => args.reverse();
console.log(reverseArgs(1, 2, 3, 4));

// Q15: calculateAverage(...values)
const calculateAverage = (...values) =>
  values.reduce((a, b) => a + b, 0) / values.length;
console.log(calculateAverage(10, 20, 30)); // 20

// Q16: Remove duplicates
const uniqueValues = (...vals) => [...new Set(vals)];
console.log(uniqueValues(1, 2, 2, 3, 1)); // [1,2,3]

// Q17: Longest word
const longestWord = (...words) =>
  words.reduce((a, b) => (b.length > a.length ? b : a), "");
console.log(longestWord("Ali", "Sara", "Ayesha"));

// Q18: Only even numbers
const selectEven = (...nums) => nums.filter((n) => n % 2 === 0);
console.log(selectEven(1, 2, 3, 4, 5, 6)); // [2,4,6]

// Q19: Group by type
const groupByType = (...vals) => {
  const result = {};
  vals.forEach((v) => {
    const t = typeof v;
    result[t] = result[t] || [];
    result[t].push(v);
  });
  return result;
};
console.log(groupByType(1, "Ali", true, {})); // {number:[1],string:["Ali"],boolean:[true],object:[{}]}

// Q20: Check if all positive
const allPositive = (...nums) => nums.every((n) => n > 0);
console.log(allPositive(1, 2, 3, 4)); // true
console.log(allPositive(1, -2, 3)); // false

// =================================
// 3. Default Parameters (20 Questions)
// =================================

// Q1: welcomeUser(name="Guest")
const welcomeUser = (name = "Guest") => `Welcome ${name}`;
console.log(welcomeUser()); // Welcome Guest
console.log(welcomeUser("Ali")); // Welcome Ali

// Q2: calculateShipping(weight, rate=100)
const calculateShipping = (weight, rate = 100) => weight * rate;
console.log(calculateShipping(2)); // 200

// Q3: Default not applied when null. Answer: default applies only for undefined

// Q4: Auto-generate user role
const createUserRole = (name, role = "Customer") => ({ name, role });
console.log(createUserRole("Ali")); // {name:"Ali",role:"Customer"}

// Q5: Default theme
const setTheme = (theme = "light") => `Theme is ${theme}`;
console.log(setTheme()); // Theme is light

// Q6: Default depends on previous param
const createInvoice = (amount, tax = amount * 0.1) => amount + tax;
console.log(createInvoice(1000)); // 1100

// Q7: Default login attempts
const loginAttempts = (attempts = 3) => `You have ${attempts} attempts`;
console.log(loginAttempts()); // 3 attempts

// Q8: Default currency
const currencyConverter = (amount, currency = "PKR") => `${amount} ${currency}`;
console.log(currencyConverter(500)); // 500 PKR

// Q9: Default array value
const addToCart = (cart = []) => {
  cart.push("Product1");
  return cart;
};
console.log(addToCart()); // ["Product1"]

// Q10: Default object
const settings = (config = { theme: "light" }) => config;
console.log(settings()); // {theme:"light"}

// Q11: Default empty string
const greetMessage = (name = "") => `Hello ${name || "Guest"}`;
console.log(greetMessage()); // Hello Guest

// Q12: Default delivery time
const deliveryTime = (time = 2) => `Delivery in ${time} days`;
console.log(deliveryTime()); // Delivery in 2 days

// Q13: Default discount percent
const applyDiscount = (price, discount = 10) =>
  price - (price * discount) / 100;
console.log(applyDiscount(1000)); // 900

// Q14: Default expression
const setPrice = (price = 50 * 2) => price;
console.log(setPrice()); // 100

// Q15: Default date
const logDate = (date = new Date()) => date;
console.log(logDate());

// Q16: Default decimals
const formatNumber = (num, decimals = 2) => num.toFixed(decimals);
console.log(formatNumber(3.14159)); // 3.14

// Q17: Default page limit
const paginate = (page = 1, limit = 10) => ({ page, limit });
console.log(paginate()); // {page:1,limit:10}

// Q18: Default callback
const runCallback = (callback = () => "No Callback") => callback();
console.log(runCallback()); // No Callback

// Q19: Default array with multiple values
const defaultArray = (arr = [1, 2, 3]) => arr;
console.log(defaultArray()); // [1,2,3]

// Q20: Default nested object
const defaultSettings = (config = { theme: "dark", layout: "grid" }) => config;
console.log(defaultSettings()); // {theme:"dark", layout:"grid"}

// =================================
// 4. Promises (20 Questions)
// =================================

// Q1: Promise resolves "Data Loaded"
const dataPromise = Promise.resolve("Data Loaded");
dataPromise.then(console.log);

// Q2: Promise rejects "Server Error"
const errorPromise = Promise.reject("Server Error");
errorPromise.catch(console.log);

// Q3: Chain promises to process order
const order = Promise.resolve(100);
order.then((total) => total + 50).then(console.log); // 150

// Q4: Promise.resolve(5)
Promise.resolve(5).then(console.log); // 5

// Q5: .catch() example
Promise.reject("Failed").catch(console.log); // Failed

// Q6: Why new Promise(()=>{}) never resolves? Answer: Executor never calls resolve/reject

// Q7: Promise resolves after 2s
const delay2s = new Promise((resolve) =>
  setTimeout(() => resolve("Done"), 2000)
);
delay2s.then(console.log);

// Q8: Callback to promise
const callbackToPromise = () =>
  new Promise((resolve) => setTimeout(() => resolve("Loaded"), 1000));
callbackToPromise().then(console.log);

// Q9: Random resolve/reject
const randomPromise = new Promise((resolve, reject) =>
  Math.random() > 0.5 ? resolve("Yes") : reject("No")
);
randomPromise.then(console.log).catch(console.log);

// Q10: Chain two promises for bill
Promise.resolve(100)
  .then((total) => total + 50)
  .then(console.log); //150

// Q11: Load user profile
const loadUser = Promise.resolve({ name: "Ali", age: 20 });
loadUser.then(console.log);

// Q12: Check auth
const checkAuth = Promise.resolve(true);
checkAuth.then((auth) => console.log(auth ? "Authorized" : "Not authorized"));

// Q13: .then() is asynchronous? Answer: Yes, even for resolved promises, it runs after current call stack

// Q14: Resolve list of products
Promise.resolve(["Keyboard", "Mouse", "Monitor"]).then(console.log);

// Q15: Promise.all()
const p1 = Promise.resolve(1),
  p2 = Promise.resolve(2);
Promise.all([p1, p2]).then(console.log); // [1,2]

// Q16: Promise.race()
Promise.race([p1, p2]).then(console.log); // 1

// Q17: Retry operation
const retryPromise = () => new Promise((resolve, reject) => resolve("Success"));
retryPromise().then(console.log);

// Q18: Synchronous function to promise
const syncFunc = () => 100;
const promiseFromSync = Promise.resolve(syncFunc());
promiseFromSync.then(console.log); //100

// Q19: Nested data
const nestedPromise = Promise.resolve({ data: { user: "Ali" } });
nestedPromise.then(console.log);

// Q20: Debug pending promise
// Answer: Make sure resolve/reject called in executor

// =================================
// 5. Async/Await (20 Questions)
// =================================

// Q1: Convert promise chain to async/await
const getTotal = async () => {
  const total = await Promise.resolve(150);
  console.log(total);
};
getTotal();

// Q2: Async function returning "User Loaded"
const loadUserAsync = async () => "User Loaded";
loadUserAsync().then(console.log);

// Q3: Await delay 1s
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const wait1s = async () => {
  await delay(1000);
  console.log("Done");
};
wait1s();

// Q4: Async must return promise? Yes

// Q5: Handle error try/catch
const safeAsync = async () => {
  try {
    await Promise.reject("Fail");
  } catch (e) {
    console.log(e);
  }
};
safeAsync();

// Q6: Await function loads orders
const getOrders = async () => ["Order1", "Order2"];
getOrders().then(console.log);

// Q7: Async executes asynchronously, even if awaiting resolved promise

// Q8: Fetch two sequential values
const fetchSequential = async () => {
  const a = await Promise.resolve(1);
  const b = await Promise.resolve(2);
  console.log(a, b);
};
fetchSequential();

// Q9: Fetch two parallel
const fetchParallel = async () => {
  const [a, b] = await Promise.all([Promise.resolve(1), Promise.resolve(2)]);
  console.log(a, b);
};
fetchParallel();

// Q10: Await inside loop
const loopAwait = async () => {
  for (const n of [1, 2, 3]) {
    await delay(500);
    console.log(n);
  }
};
loopAwait();

// Q11: Await allowed inside async only? Yes

// Q12: Retry logic
const retryAsync = async (fn, retries = 3) => {
  for (let i = 0; i < retries; i++) {
    try {
      return await fn();
    } catch (e) {
      console.log("Retry", i + 1);
    }
  }
};
retryAsync(() => Promise.reject("Fail"));

// Q13: Await multiple with Promise.all()
const multiAwait = async () => {
  const results = await Promise.all([Promise.resolve(1), Promise.resolve(2)]);
  console.log(results);
};
multiAwait();

// Q14: Logs before & after await
const logAsync = async () => {
  console.log("Start");
  await delay(500);
  console.log("End");
};
logAsync();

// Q15: Wait API response (simulated)
const fetchDataAsync = async () => {
  const data = await Promise.resolve("Data");
  console.log(data);
};
fetchDataAsync();

// Q16: Validate form async
const validateForm = async (data) => (data.username ? "Valid" : "Invalid");
validateForm({ username: "Ali" }).then(console.log);

// Q17: Await dynamic import (example commented)
// const module = await import("./module.js");

// Q18: Return custom object
const getCustom = async () => ({ status: "ok", code: 200 });
getCustom().then(console.log);

// Q19: Fix async returns undefined
const properAsync = async () => "Value";
properAsync().then(console.log);

// Q20: Simulate login process
const loginProcess = async () => {
  await delay(1000);
  console.log("Logged in");
};
loginProcess();

// =================================
// 6. Higher-Order Functions (20 Questions)
// =================================

// Q1: Function that accepts callback
const runCallback2 = (callback) => callback();
console.log(runCallback2(() => "Hello"));

// Q2: .map() to convert prices
const prices = [100, 200];
const formatted = prices.map((p) => `PKR ${p}`);
console.log(formatted);

// Q3: .filter() active users
const users = [
  { name: "Ali", active: true },
  { name: "Sara", active: false },
];
console.log(users.filter((u) => u.active));

// Q4: .reduce() total revenue
const revenue = [100, 200, 300];
console.log(revenue.reduce((a, b) => a + b, 0));

// Q5: Custom map manually
const manualMap = (arr, fn) => {
  let result = [];
  for (let el of arr) result.push(fn(el));
  return result;
};
console.log(manualMap([1, 2, 3], (n) => n * 2));

// Q6: Custom filter manually
const manualFilter = (arr, fn) => {
  let res = [];
  for (let e of arr) if (fn(e)) res.push(e);
  return res;
};
console.log(manualFilter([1, 2, 3, 4], (n) => n > 2));

// Q7: .forEach() print product names
["Mouse", "Keyboard"].forEach((p) => console.log(p));

// Q8: Function returning another function for discount
const discount = (rate) => (price) => price - (price * rate) / 100;
console.log(discount(10)(100)); //90

// Q9: Group users by age category
const groupByAge = (users) => {
  const res = { Adult: [], Minor: [] };
  users.forEach((u) => {
    u.age >= 18 ? res.Adult.push(u) : res.Minor.push(u);
  });
  return res;
};
console.log(
  groupByAge([
    { name: "Ali", age: 20 },
    { name: "Sara", age: 15 },
  ])
);

// Q10: .some() any product>10000
console.log([5000, 12000, 8000].some((p) => p > 10000)); //true

// Q11: .every() all in stock
console.log([{ stock: 5 }, { stock: 3 }].every((p) => p.stock > 0)); //true

// Q12: callback for tax
const applyTaxHOF = (amount, fn) => fn(amount);
console.log(applyTaxHOF(100, (a) => a * 1.1)); //110

// Q13: .reduce() count duplicates
const arr = [1, 2, 1, 3];
console.log(
  arr.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {})
); // {1:2,2:1,3:1}

// Q14: HOF to apply two functions
const applyTwo = (val, f1, f2) => f2(f1(val));
console.log(
  applyTwo(
    5,
    (n) => n * 2,
    (n) => n + 1
  )
); //11

// Q15: Function returning logger
const logger = (prefix) => (msg) => console.log(`${prefix}: ${msg}`);
const logInfo = logger("INFO");
logInfo("All good");

// Q16: Convert names to uppercase
console.log(["Ali", "Sara"].map((n) => n.toUpperCase()));

// Q17: Map scores to grades
const scoresToGrades = [90, 70, 50].map((s) =>
  s >= 80 ? "A" : s >= 60 ? "B" : "C"
);
console.log(scoresToGrades);

// Q18: Transform order IDs
console.log([101, 102].map((id) => `ORD${id}`));

// Q19: Reusable validation HOF
const validate = (val) => (val ? true : false);
console.log(validate("Test"));

// Q20: Average marks using HOF
console.log([50, 80, 90].reduce((a, b) => a + b, 0) / 3);

// =================================
// 7. Deep Copy & Shallow Copy (20 Questions)
// =================================

// Q1: Shallow copy example
const obj1 = { x: 1, y: 2 };
const shallow = { ...obj1 };
console.log(shallow);

// Q2: Deep copy example
const nested = { a: 1, b: { c: 2 } };
const deep = JSON.parse(JSON.stringify(nested));
console.log(deep);

// Q3: Shallow copy using spread
const copy1 = { ...nested };
console.log(copy1);

// Q4: Deep copy using JSON
const copy2 = JSON.parse(JSON.stringify(nested));
console.log(copy2);

// Q5: Shallow fails for nested
copy1.b.c = 99;
console.log(nested.b.c); // 99

// Q6: Object.assign nested
const assignCopy = Object.assign({}, nested);
assignCopy.b.c = 88;
console.log(nested.b.c); //88

// Q7: Deep copy function manually
const deepClone = (obj) => {
  if (obj === null || typeof obj !== "object") return obj;
  if (Array.isArray(obj)) return obj.map(deepClone);
  const copy = {};
  for (let key in obj) copy[key] = deepClone(obj[key]);
  return copy;
};
const cloned = deepClone(nested);
console.log(cloned);

// Q8: Two objects referencing same memory
const refA = { x: 1 };
const refB = refA;
refB.x = 99;
console.log(refA.x); // 99

// Q9: Modify nested in shallow copy
const shallowCopy = { b: { c: 5 } };
const shallow2 = { ...shallowCopy };
shallow2.b.c = 10;
console.log(shallowCopy.b.c); //10

// Q10: Independent clone of catalog
const catalog = { products: [{ id: 1 }] };
const catalogClone = JSON.parse(JSON.stringify(catalog));
catalogClone.products[0].id = 99;
console.log(catalog.products[0].id); //1

// Q11: Compare two objects
console.log(JSON.stringify(catalog) === JSON.stringify(catalogClone)); //false

// Q12: Deep copy array of objects
const arrObjs = [{ id: 1 }, { id: 2 }];
const deepArr = JSON.parse(JSON.stringify(arrObjs));
console.log(deepArr);

// Q13: JSON breaks functions
const funcObj = { fn: () => 1 };
console.log(JSON.stringify(funcObj)); // "{}"

// Q14: Deep copy nested arrays
const nestedArr = [
  [1, 2],
  [3, 4],
];
const deepArr2 = JSON.parse(JSON.stringify(nestedArr));
console.log(deepArr2);

// Q15: Shallow copy array spread
const arrCopy = [...nestedArr];
console.log(arrCopy);

// Q16: Deep copy structuredClone
// const deepSC=structuredClone(nestedArr); // browser only

// Q17: Shallow vs reference
const orig = [1, 2];
const shallowRef = orig;
shallowRef[0] = 99;
console.log(orig[0]); // 99

// Q18: Clone settings
const settingsObj = { theme: "dark" };
const clonedSettings = { ...settingsObj };
clonedSettings.theme = "light";
console.log(settingsObj.theme); // dark

// Q19: Bug example shallow
const shallowBug = { a: { b: 1 } };
const sCopy = { ...shallowBug };
sCopy.a.b = 99;
console.log(shallowBug.a.b); //99

// Q20: Fix mutation using deep copy
const fixCopy = JSON.parse(JSON.stringify(shallowBug));
fixCopy.a.b = 50;
console.log(shallowBug.a.b); //99

// =================================
// 8. Arrays (20 Questions)
// =================================

// Q1: Last element
const lastEl = (arr) => arr[arr.length - 1];
console.log(lastEl([1, 2, 3])); //3

// Q2: Remove duplicates
console.log([...new Set([1, 2, 2, 3])]);

// Q3: Highest number manually
console.log(Math.max(...[10, 20, 30]));

// Q4: Lowest number manually
console.log(Math.min(...[10, 20, 30]));

// Q5: Reverse array without reverse
const rev = (arr) => arr.map((_, i, a) => a[a.length - 1 - i]);
console.log(rev([1, 2, 3]));

// Q6: Sort names alphabetically
console.log(["Sara", "Ali", "Zara"].sort());

// Q7: Count even numbers
console.log([1, 2, 3, 4].filter((n) => n % 2 === 0).length);

// Q8: Merge arrays manually
console.log([1, 2].concat([3, 4]));

// Q9: Filter products > 100
console.log([50, 150, 200].filter((p) => p > 100));

// Q10: Strings to uppercase
console.log(["ali", "sara"].map((s) => s.toUpperCase()));

// Q11: Find user by ID
const usersArr = [
  { id: 1, name: "Ali" },
  { id: 2, name: "Sara" },
];
console.log(usersArr.find((u) => u.id === 2));

// Q12: Sum numbers
console.log([1, 2, 3].reduce((a, b) => a + b, 0));

// Q13: Second largest
const numsArr = [5, 10, 15, 7];
console.log([...numsArr].sort((a, b) => b - a)[1]);

// Q14: Check array contains value
console.log([1, 2, 3].includes(2)); // true

// Q15: Users to names
console.log(usersArr.map((u) => u.name));

// Q16: Insert at index
let arrInsert = [1, 2, 4];
arrInsert.splice(2, 0, 3);
console.log(arrInsert); // [1,2,3,4]

// Q17: Remove at index
arrInsert.splice(1, 1);
console.log(arrInsert); //[1,3,4]

// Q18: Chunk array
const chunk = (arr, size) =>
  arr.reduce((res, val, i) => {
    if (i % size === 0) res.push([val]);
    else res[res.length - 1].push(val);
    return res;
  }, []);
console.log(chunk([1, 2, 3, 4, 5], 2));

// Q19: Flatten nested arrays
console.log([1, [2, 3], [4, 5]].flat());

// Q20: Replace value
const replacedArr = [1, 2, 3].map((n) => (n === 2 ? 20 : n));
console.log(replacedArr); //[1,20,3]

// =================================
// 9. Objects (20 Questions)
// =================================

// Q1: Extract name
const emp = { name: "Ali", age: 25 };
const { name } = emp;
console.log(name);

// Q2: Nested destructuring
const emp2 = { name: "Sara", address: { city: "Lahore" } };
const {
  address: { city },
} = emp2;
console.log(city);

// Q3: Combine objects
const objA = { x: 1 };
const objB = { y: 2 };
console.log({ ...objA, ...objB });

// Q4: Update without mutation
const updatedObj = { ...emp, age: 30 };
console.log(updatedObj);

// Q5: Remove property
const { age, ...empWithoutAge } = emp;
console.log(empWithoutAge);

// Q6: Loop keys
for (let key in emp) console.log(key);

// Q7: Loop values
for (let key in emp) console.log(emp[key]);

// Q8: Object keys to array
console.log(Object.keys(emp));

// Q9: Object entries
console.log(Object.entries(emp));

// Q10: Rebuild from entries
console.log(
  Object.fromEntries([
    ["x", 10],
    ["y", 20],
  ])
);

// Q11: Freeze object
const frozenObj = Object.freeze({ a: 1 });
// frozenObj.a=5; // fails
console.log(frozenObj);

// Q12: Seal object
const sealed = Object.seal({ b: 2 });
sealed.b = 5; // allowed
// sealed.c=3; // not allowed
console.log(sealed);

// Q13: Check property
console.log("name" in emp); //true

// Q14: Clone safely
const clonedEmp = { ...emp };
console.log(clonedEmp);

// Q15: Compare two objects
const obj1a = { x: 1 };
const obj2b = { x: 1 };
console.log(JSON.stringify(obj1a) === JSON.stringify(obj2b)); //true

// Q16: Swap keys and values
const swap = { a: 1, b: 2 };
console.log(Object.fromEntries(Object.entries(swap).map(([k, v]) => [v, k])));

// Q17: Sort array of objects by age
const people = [
  { name: "Ali", age: 30 },
  { name: "Sara", age: 25 },
];
console.log(people.sort((a, b) => a.age - b.age));

// Q18: Object to query string
const params = { id: 1, name: "Ali" };
console.log(
  Object.entries(params)
    .map(([k, v]) => `${k}=${v}`)
    .join("&")
);

// Q19: Add new property without touching original
const newObj = { ...emp, city: "Lahore" };
console.log(newObj);

// Q20: Merge settings with default
const defaultSettings2 = { theme: "light", layout: "grid" };
const userSettings = { theme: "dark" };
console.log({ ...defaultSettings2, ...userSettings });
