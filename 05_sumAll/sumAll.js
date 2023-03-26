const sumAll = function(num1, num2) {
  let largeNumber = 0;
  let smallNumber = 0;
  let sum = 0;

  if (num1 < 0 || num2 < 0 || typeof num1 != 'number' || typeof num2 != 'number')
  {
    return 'ERROR';
  }

  if (num1 < num2)
  {
    largeNumber = num2;
    smallNumber = num1;
  }
  else if (num1 > num2)
  {
    largeNumber = num1;
    smallNumber = num2;
  }
  else
  { 
    return 'ERROR'
  }

  for (let i = smallNumber; i <= largeNumber; i++)
  {
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
