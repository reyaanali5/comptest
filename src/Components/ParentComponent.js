import React from 'react';
import MarsWeather from './MarsWeather';
import APODImage from './APODImage';

const ParentComponent = () => {
    return (
        <div>
            <MarsWeather />
            <APODImage />
        </div>
    );
};

export default ParentComponent;