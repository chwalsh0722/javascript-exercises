const repeatString = function(string, num) {

  let newString = string;

  if (num == 0)
  {
    return '';
  }
  else if (num < 0)
  {
    return 'ERROR';
  }
  else
  {
    for (let i = 0; i < num - 1; i++)
    {
      newString += string;
    }
    return newString;
  }
};

// Do not edit below this line
module.exports = repeatString;
