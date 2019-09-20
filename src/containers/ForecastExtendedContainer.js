import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Redux - connect
import {connect} from 'react-redux';

// Components
import ForecastExtended from './../components/ForecastExtended';


class ForecastExtendedContainer extends Component {
    render() {
        return (
            this.props.city && 
            <ForecastExtended city={this.props.city} />
        );
    }
}


ForecastExtendedContainer.propTypes = {
    city: PropTypes.string
};

// MapStateToProps
const mapStateToProps = ({city}) => ({city})


export default connect(mapStateToProps, null)(ForecastExtendedContainer);
