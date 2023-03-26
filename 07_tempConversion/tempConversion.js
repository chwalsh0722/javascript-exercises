const convertToCelsius = function(temperature) {
  if (temperature == 32)
  {
    return 0;
  }
  else
  {
    return parseFloat(((temperature - 32) / 1.8).toFixed(1));
  }
};

const convertToFahrenheit = function(temperature) {
  return parseFloat((temperature * 1.8 + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
