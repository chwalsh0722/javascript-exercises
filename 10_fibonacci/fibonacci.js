const fibonacci = function(num) {
  let prevNum = 0;
  let currentNum = 1;
  let sum = 0;
  numFound = false;

  if (num < 0)
  {
    return "OOPS";
  }

  if (typeof num != 'number')
  {
    num = parseInt(num);
  }

  if (num == 0)
  {
    return 0;
  }
  else if (num == 1)
  {
    return 1;
  }
  else
  {
    for (let i = 2; i <= num; i++)
    {
      sum = prevNum + currentNum;
      prevNum = currentNum;
      currentNum = sum;
    }
    return sum;
  }
};

// Do not edit below this line
module.exports = fibonacci;
