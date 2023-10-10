import React, { useState, useEffect } from 'react';
import axios from 'axios';
import venusImage from '../images/venus.png'; // Import the image


function Venus() {
  const [planetData, setPlanetData] = useState(null);

  useEffect(() => {
    const apiKey = '3J+dWBW8QXneboHS6ry8Gg==KreuAlFtf9xLOw1V';

    const apiUrl = 'https://api.api-ninjas.com/v1/planets?name=Venus';

    axios.get(apiUrl, {
      headers: {
        'X-Api-Key': apiKey,
      },
    })
      .then((response) => {
        setPlanetData(response.data[0]);
      })
      .catch((error) => {
        console.error('API Error:', error);
      });
  }, []);

  return (
    <div>
      <div className="planet-heading">
        <h2>VENUS</h2>
      </div>
      <div className="planet-info">
        {planetData && (
          <div className="planet-container">
            <img src={venusImage} alt="Venus" className="planet-image" />
            <div className="planet-text">
              <p>Mass: {planetData.mass} Jupiters</p>
              <p>Radius: {planetData.radius} Jupiters</p>
              <p>Orbital Period: {planetData.period} Earth days</p>
              <p>Temperature: {planetData.temperature} Kelvin</p>
            </div>
          </div>
        )}
      </div>
      <footer>
        <div className="footer-content">The Universe Copright - 2023  </div>
      </footer>
    </div>
  );
}

export default Venus;
