export default (weatherData) => {
  const dayTracker = [];
  const dailyWeatherData = [];
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  weatherData.forEach((weatherRecord) => {
    // eslint-disable-next-line camelcase
    const { dt_txt, main: { temp }, weather } = weatherRecord;
    const recordDate = dt_txt.split(' ')[0];

    if (!dayTracker.includes(recordDate)) {
      const day = new Date(recordDate).getDay();

      const record = {
        day: days[day],
        mainTemp: temp,
        description: weather[0].main,
      };

      dayTracker.push(recordDate);
      dailyWeatherData.push(record);
    }
  });


  return dailyWeatherData;
};
