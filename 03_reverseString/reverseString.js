const reverseString = function(string) {
  let strLength = string.length;
  let reverseString = string.charAt(strLength - 1);
  for (let i = strLength - 2; i >= 0; i--)
  {
    reverseString += string.charAt(i);
  }
  return reverseString;
};

// Do not edit below this line
module.exports = reverseString;
