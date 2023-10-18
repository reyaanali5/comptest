import React, { useState, useEffect } from 'react';

function MarsWeather() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetch('/MarsWeather')
      .then((response) => response.json())
      .then((data) => {
        console.log('API Response:', data);
        setWeatherData(data);
      })
      .catch((error) => {
        console.error('Error fetching Mars weather data:', error);
      });
  }, []);

  return (
    <div className="mars-weather">
      <h2>Mars Weather</h2>
      {weatherData ? (
        <div>
          <p>Sol: {weatherData.sol_keys[0]}</p>
          <p>Atmospheric Pressure: {weatherData[weatherData.sol_keys[0]].AT.av} Pa</p>
          <p>Temperature: {weatherData[weatherData.sol_keys[0]].AT.av} °C</p>
        </div>
      ) : (
        <p>Loading weather data</p>
      )}
    </div>
  );
}

export default MarsWeather;
