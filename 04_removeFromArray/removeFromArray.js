const removeFromArray = function(array, ...itemsToRemove) {
  let arrayLength = array.length;
  let numRemovals = itemsToRemove.length;
  let newArray = [];
  let removeItem = false;

  for (i = 0; i < arrayLength; i++)
  {
    removeItem = false;
    for (j = 0; j < numRemovals; j++)
    {
      if (array[i] === itemsToRemove[j])
      {
        removeItem = true;
      }
    }
    if (removeItem)
    {
      continue;
    }
    else
    {
      newArray.push(array[i]);
    }
  }
  
  // for (let i = 0; i < arrayLength; i++)
  // {
  //   for (let j = 0; j < numRemovals; j++)
  //   if (array[i] == itemToRemove[0] || array[i] == itemToRemove[1])
  //   {
  //     continue;
  //   }
  //   else
  //   {
  //     newArray.push(array[i]);
  //   }
  // }

  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
