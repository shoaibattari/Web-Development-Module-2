function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function loopResult() {
  const results = [];

  for (let i = 0; i < 5; i++) {
    results.push(i); 
  }

  return results;
}

module.exports = { add, multiply, loopResult };
