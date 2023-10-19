import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MarsWeather() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:5000/MarsWeather');
        setWeatherData(response.data);
      } catch (error) {
        console.error("Error fetching Mars Weather: ", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="mars-weather">
      <h2>Mars Weather</h2>
      {weatherData ? (
        weatherData.sol_keys.length > 0 ? (
          <div>
            <p>Sol: {weatherData.sol_keys[0]}</p>
            {weatherData[weatherData.sol_keys[0]].AT ? (
              <div>
                <p>Atmospheric Pressure: {weatherData[weatherData.sol_keys[0]].AT.av} Pa</p>
                <p>Temperature: {weatherData[weatherData.sol_keys[0]].AT.av} °C</p>
              </div>
            ) : (
              <p>Weather data not available</p>
            )}
          </div>
        ) : (
          <p>No sol keys available</p>
        )
      ) : (
        <p>Loading weather data</p>
      )}
    </div>
  );
}

export default MarsWeather;