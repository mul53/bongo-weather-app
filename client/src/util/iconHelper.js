export default (description) => {
  const sun = /(clear|sun)/i;
  const rain = /rain/i;
  const storm = /storm/i;
  const snow = /snow/i;
  const cloudy = /cloud/i;

  let response;

  if (sun.test(description)) {
    response = 'sun';
  } else if (rain.test(description)) {
    response = 'rain';
  } else if (storm.test(description)) {
    response = 'storm';
  } else if (snow.test(description)) {
    response = 'snow';
  } else if (cloudy.test(description)) {
    response = 'cloudy';
  } else {
    response = 'sun';
  }

  return response;
};
