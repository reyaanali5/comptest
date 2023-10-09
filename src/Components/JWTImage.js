import React, { useState, useEffect } from 'react';
import axios from 'axios';

function JWTImage() {
    const [image, setImage] = useState("");

    useEffect(() => {
        async function fetchData() {
            try {
                // Add your API key to the headers
                const apiKey = '85e455df-2a47-4d8c-83cd-1213107682f5';
                const headers = {
                    'X-API-KEY': apiKey,
                };

                const response = await axios.get('https://webbapi.avatsaev.com/telescopes/1/images/latest', { headers });

                setImage(response.data.url);
            } catch (error) {
                console.error("Error fetching image: ", error);
            }
        }
        fetchData();
    }, []);

    return (
        <div className="JWT-Image">
            <h2>Latest from the James Webb Telescope</h2>
            {image ? <img src={image} alt="JWT Image" /> : <p>Loading...</p>}
        </div>
    );
}

export default JWTImage;
