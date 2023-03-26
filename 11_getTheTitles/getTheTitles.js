const getTheTitles = function(books) {
  let length = books.length;
  let titles = [];

  for (let i = 0; i < length; i++)
  {
    titles.push(books[i].title);
  }
  return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
