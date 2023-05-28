import React, { useState } from 'react';
import axios from 'axios';
import '../index.css';


const Weather = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = async () => {
    const options = {
      method: 'GET',
      url: 'https://weatherapi-com.p.rapidapi.com/current.json',
      params: { q: city },
      headers: {
        'X-RapidAPI-Key': '2441e2b21bmshbdb14dafdd30777p147ba8jsnfec5ae8e11f9',
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      setWeatherData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
    fetchWeatherData();
  };

  return (
    <div className="weather-container">
      <h2>Weather</h2>
      <form onSubmit={handleCityChange}>
        <input
          type="text"
          value={city}
          onChange={handleCityChange}
          placeholder="Enter City Name"
        />
        <button type="submit">Get Weather</button>
      </form>

      {weatherData ? (
        <div className="weather-output">
          <h3>Current Weather in {weatherData.location.name}</h3>
          <p>Temperature: {weatherData.current.temp_f}°F</p>
          <p>Humidity: {weatherData.current.humidity}%</p>
          <p>Condition: {weatherData.current.condition.text}</p>
        </div>
      ) : (
        <h4>No weather data available</h4>
      )}
    </div>
  );
};

export default Weather;
