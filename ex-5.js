function sum(...input) {
  return input.reduce((total, num) => total + num, 0);
}

let result1 = sum(1, 2, 3, 4, 5, 6, 7, 8);
let result2 = sum(1, 2, 3, 4);

console.log(`Result ${result1}`); // Result 36
console.log(`Result ${result2}`); // Result 10
