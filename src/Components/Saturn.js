import React, { useState, useEffect } from 'react';
import axios from 'axios';
import saturnImage from '../images/saturn.png'; // Import the image

function Saturn() {
  const [planetData, setPlanetData] = useState(null);

  useEffect(() => {
    const apiKey = '3J+dWBW8QXneboHS6ry8Gg==KreuAlFtf9xLOw1V';

    const apiUrl = 'https://api.api-ninjas.com/v1/planets?name=Saturn';

    axios
    .get(apiUrl, {
      headers: {
        'X-Api-Key': apiKey,
      },
    })

    .then((response) => {
      setPlanetData(response.data[0]);
      // Trigger the scroll to the bottom after a short delay to ensure the DOM is updated.
      
      setTimeout(() => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      }, );
    })
    .catch((error) => {
      console.error('API Error:', error);
    });
}, []);

  return (
    <div>
      <div className="planet-heading">
        <h2>SATURN</h2>
      </div>
      <div className="planet-info">
        {planetData && (
          <div className="planet-container">
            <div className="planet-description">
              <p>
                Saturn is famous for its stunning ring system, composed of countless icy particles and rock.
              </p>
            </div>
            <img src={saturnImage} alt="Saturn" className="planet-image" />
            <div className="planet-stats">
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

export default Saturn;
