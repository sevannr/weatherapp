import React from 'react';

// PropTypes
import PropTypes from 'prop-types';

const Location = ({city}) => {
    return (
        <div className="location-cont">
            <span className="location-title">{city}</span>
        </div>
    );
};

Location.propTypes = {
    city: PropTypes.string.isRequired
}

export default Location;