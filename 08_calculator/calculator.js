const add = function(num1, num2) {
	return parseInt(num1) + parseInt(num2);
};

const subtract = function(num1, num2) {
  return parseInt(num1) - parseInt(num2);
};

const sum = function(nums) {
	let length = nums.length;
  let sum = 0;

  if (nums.length === 0)
  {
    return 0;
  }
  else
  {
    for (let i = 0; i < nums.length; i++)
    {
      sum += parseInt(nums[i]);
    }
    return sum;
  }
};

const multiply = function(nums) {
  let length = nums.length;
  let result = nums[0];
  for (let i = 1; i < length; i++)
  {
    result *= nums[i];
  }
  return result;
};

const power = function(num, power) {
	let result = 1;
  for (let i = 0; i < power; i++)
  {
    result *= num;
  }
  return result;
};

const factorial = function(num) {
  
  result = 1;
  if (num == 0)
  {
    return 1;
  }

  for (let i = num; i > 0; i--)
  {
    result *= i;
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
