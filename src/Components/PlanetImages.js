import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const favUrl = `http://localhost:5000/api/planets`;

function PlanetImg({ favourites, setFavourites }) {
    const [fav, setFav] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(favUrl)
            .then(response => {
                setFav(response.data);
            })
            .catch((error) => {
                console.error('Unable to fetch favourites', error);
            });
    }, []);

    const addToFavourites = (planetImg) => {
        if (favourites.find((index) => index.id === planetImg.id)) { //if it finds the same id as the planet id return nothing 
            return
        }
        else {
            navigate("/Favourites")
            setFavourites([...favourites, planetImg]); //else return planet to favourites
        }
    };


    return (
        <div>
            <h2>Images of Planets</h2>
            <ul className="planetFav-row">
                {fav.map(planet => (
                    <li key={planet.id} className="planetFav-card">
                        <img className="planetFAV-img" src={planet.image} />
                        <p><button className="addFav" onClick={() => addToFavourites(planet)}>Add to Favourites</button></p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PlanetImg;