import React, { useState } from 'react';
import './Weather.css';


function Weather() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const apiKey = '06a35a1099f6015ab80cbede2f3d48d9';

  const getWeather = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      const data = await response.json();
      if (data.cod === 200) {
        setWeather(data);
        setError(null);
      } else {
        setWeather(null);
        setError(data.message);
      }
    } catch (err) {
      setError('Failed to fetch weather data');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '30px' }}>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={{ padding: '10px', width: '200px', borderRadius: '5px' }}
      />
      <button onClick={getWeather} style={{ marginLeft: '10px', padding: '10px' }}>
        Get Weather
      </button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {weather && (
        <div style={{ marginTop: '20px' }}>
          <h2>{weather.name}</h2>
          <p>🌡 Temperature: {weather.main.temp} °C</p>
          <p>🌥 Weather: {weather.weather[0].description}</p>
          <p>💧 Humidity: {weather.main.humidity}%</p>
          <p>🌬 Wind: {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
}

export default Weather;
