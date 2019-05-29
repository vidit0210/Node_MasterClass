let x = function() {
  console.log("X is called");
};
let y = function(callback) {
  console.log("Y");
  callback();
};
y(x);

let add = function(a, b) {
  return a + b;
};

let mul = function(a, b) {
  return a * b;
};
let calc = function(num1, num2, callback) {
  return callback(num1, num2);
};

console.log(calc(3, 5, add));
console.log(
  calc(4, 1, (a, b) => {
    return a - b;
  })
);
