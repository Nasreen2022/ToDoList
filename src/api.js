import axios from 'axios';


// here we have to use our own api key
const API_KEY = 'weather_api_key';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const fetchWeather = (city) => {
  return axios.get(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
};
