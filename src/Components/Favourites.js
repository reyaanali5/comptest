import React from 'react';

function Favourites({ favorites, removeFavourites }) {

    const handleDelete = (index) => {
        removeFavourites(index);
    };

    return (
        <div>
            <h2>Favourites</h2>
            <ul className="planetFav-row">
                {favorites.map((planet, index) => (
                    <li key={index} className="planetFav-card"> {planet.name}
                        <img className="planetFAV-img" src={planet.image} />
                        <p><button className="favDelete" onClick={() => handleDelete(planet.id)}>Remove</button></p>
                    </li>

                ))}
            </ul>
        </div>
    );
}

export default Favourites;