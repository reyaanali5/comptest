import React from 'react';

function Favourites({ favourites, removeFavourites }) {


    setTimeout(() => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
        });
    },);

    const handleDelete = (index) => {
        removeFavourites(index);
    };

    if (favourites.length > 0) {
        return (
            <div>
                <h2>Favourites</h2>
                <ul className="planetFav-row">
                    {favourites.map((planet, index) => (
                        <li key={index} className="planetFav-card"> {planet.name}
                            <img className="planetFAV-img" src={planet.image} />
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