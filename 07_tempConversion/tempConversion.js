const convertToCelsius = function(fTemp) {
  celsius = Math.round(((fTemp - 32) * 5/9)*10)/10;
  return celsius;
};

const convertToFahrenheit = function(cTemp) {
  fahrenheit = Math.round((cTemp * 9/5 + 32) *10)/10;
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
