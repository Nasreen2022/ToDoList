import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWeather } from '../redux/weatherSlice';

const WeatherDisplay = ({ city }) => {
  const dispatch = useDispatch();
  const weather = useSelector((state) => state.weather);

  useEffect(() => {
    if (city) {
      dispatch(getWeather(city));
    }
  }, [city, dispatch]);

  if (weather.status === 'loading') {
    return <div>Loading...</div>;
  }

  if (weather.status === 'failed') {
    return <div>Error: {weather.error}</div>;
  }

  if (weather.status === 'succeeded') {
    return (
      <div className="weather-display">
        <h3>Weather in {city}</h3>
        <p>Temperature: {weather.data.main.temp}°C</p>
        <p>Condition: {weather.data.weather[0].description}</p>
      </div>
    );
  }

  return null;
};

export default WeatherDisplay;
