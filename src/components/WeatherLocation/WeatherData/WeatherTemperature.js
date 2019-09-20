import React from 'react';

// PropTypes
import PropTypes from 'prop-types';

// Constants
import { CLOUD, SUN, RAIN, SNOW, FOG, THUNDER, DRIZZLE } from './../../../constants/weather';

// Styles
import './styles.css';

// Icons
import WeatherIcons from 'react-weathericons';

// Icons dictionary
const icons = {
    [SUN]: "day-sunny",
    [FOG]: "day-fog",
    [CLOUD]: "cloud",
    // [CLOUDY]: "cloudy",
    [RAIN]: "rain",
    // [WINDY]: "windy",
    [SNOW]: "snow",
    [THUNDER]: "day-thunderstorm",
    [DRIZZLE]: "day-showers"
}

// Get current weather icon
const getWeatherIcon = weatherState => {
    let icon = icons[weatherState];

    // If icon is null or empty, return default icon
    if(!icon){
        icon = icons['sun'];
    }

    return(
        <WeatherIcons name={`${icon}`} className="wicon" />
    );
}

const WeatherTemperature = ({temperature, weatherState}) => {
    return (
        <div className="weather-temperature-cont">            
            <span className="temperature">{` ${temperature} `}</span>
            <span className="temperatureType">{`°C `}</span>
            <span>{ getWeatherIcon(weatherState) }</span>
        </div>
    );
};

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired
}

export default WeatherTemperature;