const findTheOldest = function(people) {
  let numPeople = people.length;
  let oldestIndex = 0;

  // for (let i = 0; i < numPeople; i++)
  // {
  //   if (!person[i].yearOfDeath)
  //   {
  //     person[i].yearOfDeath = 2023;
  //   }
  // }

  for (let i = 1; i < numPeople; i++)
  {
    let age1 = people[oldestIndex].yearOfDeath - people[oldestIndex].yearOfBirth;
    let age2 = people[i].yearOfDeath - people[i].yearOfBirth;
    if (age1 > age2)
    {
      continue;
    }
    else
    {
      oldest = people[i];
    }
  }
  return people[oldestIndex].name;
};

// Do not edit below this line
module.exports = findTheOldest;
