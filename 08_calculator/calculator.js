const add = function(...args) {
	return args.reduce((add,current) => add + current, 0);
};

const subtract = function(...args) {
	return args.reduce((difference,current) => difference - current);
};

const sum = function(inputArray) {
	let sums = 0;
  for (let i = 0; i < inputArray.length; i++) {
    sums += inputArray[i]; 
  }
  return sums
};

const multiply = function(...args) {
  return args.reduce((product, current) => product * Number(current, 1);
 };

const power = function(base, exponent) {
  return base ** exponent;
};

const factorial = function(fact) {
  let result = 1;
  for (let i = 1; i <= fact; i++) {
    result = result * i;
  }
  return result;
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
