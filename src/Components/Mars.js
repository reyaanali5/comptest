import React, { useState, useEffect } from 'react';
import axios from 'axios';
import marsImage from '../images/mars.png'; // Import the image

function Mars() {
  const [planetData, setPlanetData] = useState(null);

  useEffect(() => {
    const apiKey = '3J+dWBW8QXneboHS6ry8Gg==KreuAlFtf9xLOw1V';

    const apiUrl = 'https://api.api-ninjas.com/v1/planets?name=Mars';

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
        <h2>MARS</h2>
      </div>
      <div className="planet-info">
        {planetData && (
          <div className="planet-container">
            <div className="planet-description">
  <p>
    Mars is the fourth planet from the Sun and often called the "Red Planet" due to its reddish appearance.
  </p>
</div>
            <img src={marsImage} alt="Mars" className="planet-image" />
            <div className="planet-text">
            <p> <strong>Mass:</strong>  {planetData.mass} Jupiters</p>
              <p> <strong>Radius:</strong> {planetData.radius} Jupiters</p>
              <p><strong>Orbital Period: </strong>{planetData.period} Earth days</p>
              <p><strong>Temperature: </strong> {planetData.temperature} Kelvin</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Mars;
