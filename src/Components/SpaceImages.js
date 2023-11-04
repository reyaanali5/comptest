import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const favUrl = `http://localhost:5000/api/planets`;

function SpaceImage({ favourites, setFavourites }) {


    setTimeout(() => {
        window.scrollTo({
            top: 1050,
            behavior: 'smooth',
        });
    },);

    const [fav, setFav] = useState([]);
    const [search, setSearch] = useState('');

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

    const addFavourites = (planetImg) => {
        if (favourites.find((index) => index.id === planetImg.id)) { //if it finds the same id as the planet id return nothing 
            return
        }
        else {
            navigate("/Favourites") // will navigate to the favourites page
            setFavourites([...favourites, planetImg]); //add planetImg to favourites
        }
    };


    const favFilter = fav.filter((planetFilter) =>
        planetFilter.name.toLowerCase().includes(search.toLowerCase())  //it will filter by using the name on the search
    );

    return (
        <div>
            <h2>Images of Space</h2>

            <label htmlFor="searchbar" className='searchLabel'>

                <input
                    type="text"
                    className='searchInput'
                    placeholder="Search link.."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                &nbsp;Search
                <img src={require('../images/search.png')} alt="search" width="35" />
            </label>

            <ul className="planetFav-row">
                {favFilter.map(planet => (
                    <li key={planet.id} className="planetFav-card">
                        <Link to={planet.image}>
                            <img className="planetFAV-img" alt="space" src={planet.image} />
                        </Link>
                        <li>{planet.name}</li>
                        <p><button className="addFav" onClick={() => addFavourites(planet)}>Add to Favourites</button></p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SpaceImage;