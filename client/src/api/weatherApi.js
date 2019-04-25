const BASE_URL = 'http://api.openweathermap.org/data/2.5/';
const API_KEY = '849648ec9f395dbb3891efabbf3f3070';
const CELCUIS = 'metric';
const service = {
  weather: 'weather',
  forecast: 'forecast',
};


export const currentWeather = city => fetch(`${BASE_URL}${service.weather}?q=${city}&units=${CELCUIS}&appid=${API_KEY}`);

export const weatherForecast = city => fetch(`${BASE_URL}${service.forecast}?q=${city}&units=${CELCUIS}&appid=${API_KEY}`);
