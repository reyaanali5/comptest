import React, { useState, useEffect } from 'react';
import axios from 'axios';

const favUrl = `http://localhost:5000/api/planets`;

function PlanetImg() {

    const [fav, setFav] = useState([]); //initializing a new state variable 

    useEffect(() => {
        console.log('effect')
        axios
            .get(favUrl)
            .then(response => {
                console.log('promise fulfilled')
                setFav(response.data)
            })
    }, [])


    setTimeout(() => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
        });
    },);

    return (
        <div>
            <h2>Images of Planets</h2>
            <p>Test</p>

            <ul className="planetFav-row">
                {fav.map(planet => (
                    <li key={planet.id} className="planetFav-card">
                        <p className='title'>{planet.name} </p>
                        <p className='title'>{planet.description} </p>
                    </li>


                ))}

            </ul>
        </div>
    )
}

export default PlanetImg;
