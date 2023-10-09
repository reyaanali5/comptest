import React, { useState, useEffect } from 'react';
import axios from 'axios';

function JWTImage () {
    const [image, setImage] = useState("");

    useEffect (() => {
        async function fetchData() {
            try {
                const response = await axios.get('https://webbapi.avatsaev.com/telescopes/1/images/latest');
                setImage(response.data.url);
            } catch (error) {
                console.error("Error fetching image: ", error);
            }
        }
        fetchData();
    }, []);

    return (
        <div className = "JWT-Image">
            <h2>Latest from the James Webb Telescope</h2>
            {image ? <img src={image} alt="JWT Image" /> : <p>Loading...</p>}
        </div>
    );
}

export default JWTImage;