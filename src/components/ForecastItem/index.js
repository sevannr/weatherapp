import React from 'react';

// PropTypes
import PropTypes from 'prop-types';

// Components
import WeatherData from './../WeatherLocation/WeatherData';

const ForecastItem = ({weedDay, hour, data}) => {
    return (
        <div>
            <div> {weedDay} ({hour}:00) </div>
            <WeatherData data={data} />
        </div>
    );
};

ForecastItem.propTypes = {
    weedDay: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired
    }).isRequired
}

export default ForecastItem;