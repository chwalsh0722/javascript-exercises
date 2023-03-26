const palindromes = function (string) {
  let length = string.length;
  let letters = [];
  let numLetters = 0;
  let halfStringLetters = 0;
  let isPalindrome = false;

  // Get number of letters and their location in string.
  for (let i = 0; i < length; i++)
  {
    let char = string.charAt(i);
    if (char == '!' || char == '?' || char == '.' || char == ' ' || char == ',')
    {
      continue;
    }
    else
    {
      numLetters++;
      letters.push(string.charAt(i).toLowerCase());
    }
  }

  for (let i = 0; i < numLetters; i++)
  {
    if (letters[i] == letters[numLetters - 1 - i])
    {
      continue;
    }
    else
    {
      isPalindrome = false;
      return isPalindrome
    }
  }

  isPalindrome = true;
  return isPalindrome;
};

// Do not edit below this line
module.exports = palindromes;
