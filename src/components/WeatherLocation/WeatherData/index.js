import React from 'react';

// PropTypes
import PropTypes from 'prop-types';

// Constants
// import { CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY, FOG } from './../../../constants/weather';

// Styles
import './styles.css';

// Components
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';

const WeatherData = ({data : {temperature, weatherState, humidity, wind}}) => {
    return (
        <div className="weather-data-cont">
            <WeatherTemperature 
                temperature={temperature} 
                weatherState={weatherState} 
            />

            <WeatherExtraInfo humidity={humidity} wind={wind} />
        </div>
    );
};

WeatherData.propTypes = {
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired
    }).isRequired
}

export default WeatherData;