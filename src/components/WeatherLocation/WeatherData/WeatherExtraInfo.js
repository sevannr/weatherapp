import React from 'react';

// PropTypes
import PropTypes from 'prop-types';

// Styles
import './styles.css';

const WeatherExtraInfo = ({humidity, wind}) => {
    return (
        <div className="weather-extra-info-cont">
            <span className="extra-info-text">{`Humedad: ${humidity} % `}</span>
            <span className="extra-info-text">{`Viento: ${wind}`}</span>
        </div>
    );
};

WeatherExtraInfo.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired
}

export default WeatherExtraInfo;