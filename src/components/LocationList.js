import React from 'react';

// PropTypes
import PropTypes from 'prop-types';

// Styles
import './style.css';

// Components
import WeatherLocation from './WeatherLocation';

const LocationList = ({cities, onSelectedLocation}) => {
    const handleWeatherLocationClick = (city) => {
        onSelectedLocation(city);
    }

    const strToComponent = (cities) => (
        cities.map(city => ( 
                <WeatherLocation 
                    city={city} 
                    key={city} 
                    onWeatherLocationClick={()=>handleWeatherLocationClick(city)}
                /> 
            )
        ) 
    );

    return (
        <div className="location-list">
            {strToComponent(cities)}
        </div>
    );
};

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func.isRequired,
}

export default LocationList;