import React, { useState, useEffect } from 'react';
function Favourites() {
    setTimeout(() => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
        });
    },);

    return (
        <div>
            <h2>Favourites</h2>
            <p>Test</p>
        </div>
    )
}

export default Favourites;
