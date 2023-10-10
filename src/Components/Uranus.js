import React, { useState, useEffect } from 'react';
import axios from 'axios';
import uranusImage from '../images/uranus.png'; // Import the image

function Saturn() {
  const [planetData, setPlanetData] = useState(null);

  useEffect(() => {
    const apiKey = '3J+dWBW8QXneboHS6ry8Gg==KreuAlFtf9xLOw1V';

    const apiUrl = 'https://api.api-ninjas.com/v1/planets?name=Uranus';

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
        <h2>URANUS</h2>
      </div>
      <div className="planet-info">
        {planetData && (
          <div className="planet-container">
            <img src={uranusImage} alt="Uranus" className="planet-image" />
            <div className="planet-text">
              <p>Mass: {planetData.mass} Jupiters</p>
              <p>Radius: {planetData.radius} Jupiters</p>
              <p>Orbital Period: {planetData.period} Earth days</p>
              <p>Temperature: {planetData.temperature} Kelvin</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Saturn;
