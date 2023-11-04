import React from 'react';

function Favourites({ favourites, handleDelete }) {


    setTimeout(() => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
        });
    },);

    if (favourites.length > 0) {
        return (
            <div>
                <h2>Favourites</h2>
                <ul className="planetFav-row">
                    {favourites.map((planet) => (
                        <li key={planet.id} className="planetFav-card">
                            <img className="planetFAV-img" alt="space" src={planet.image} />
                            <li>{planet.name}</li>
                            <p><button className="favDelete" onClick={() => handleDelete(planet.id)}>Remove Image</button></p>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
    return (
        <div>
            <h2>Favourites</h2>
            <p>You haven't added any images to your favourites.</p>
        </div>
    );
}

export default Favourites;