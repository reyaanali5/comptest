import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const favUrl = `http://localhost:5000/api/planets`;

function PlanetImg({ favorites, setFavorites }) {
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

    const addToFavorites = (planetImg) => {
        if (favorites.find((index) => index.id === planetImg.id)) { //if it finds the same id as the planet id return nothing 
            return
        }
        else {
            navigate("/Favourites")
            setFavorites([...favorites, planetImg]); //else return planet to favourites
        }
    };


    return (
        <div>
            <h2>Images of Planets</h2>
            <ul className="planetFav-row">
                {fav.map(planet => (
                    <li key={planet.id} className="planetFav-card">
                        <img className="planetFAV-img" src={planet.image} />
                        <p><button className="addFav" onClick={() => addToFavorites(planet)}>Add to Favorites</button></p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PlanetImg;