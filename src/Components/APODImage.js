import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function APODImage() {
    const [imageData, setImageData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('http://localhost:5000/apod');
                setImageData(response.data);
            } catch (error) {
                console.error("Error fetching APOD: ", error);
            }
        }
        fetchData();
    }, []);

    return (
        <div className="APOD-Image">
            <div className="planet-heading"><h2>NASA's Astronomy Picture of the Day</h2></div>
            {imageData ? (
                <>
                    {imageData.media_type === "image" ? (
                        <Link to={imageData.url} style={{ textDecoration: 'none', color: '#000' }}> <img className="apodImg" src={imageData.url} alt="APOD Image" /></Link>
                    ) : (
                        <iframe title="APOD Video" src={imageData.url}></iframe> // If a video is uploaded instead of an image
                    )}
                    <p className="explanation">{imageData.explanation}</p>
                </>
            ) : <p>Loading...</p>}
            <footer>
                <div className="footer-content">The Universe Copright - 2023  </div>
            </footer>
        </div>

    );
}

export default APODImage;