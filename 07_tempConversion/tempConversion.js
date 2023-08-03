const temperature_constant = 32;

const convertToCelsius = function(fahrenheit) {
  return parseFloat(((fahrenheit - temperature_constant) / 1.8).toFixed(1));
};

const convertToFahrenheit = function(celsius) {
  return parseFloat((celsius * 1.8 + temperature_constant).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
