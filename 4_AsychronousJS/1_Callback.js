let x = function() {
  console.log("X is called");
};
let y = function(callback) {
  console.log("Y");
  callback();
};
y(x);

let calc = function(num1, num2, calcType) {};
