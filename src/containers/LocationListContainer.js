import React, { Component } from 'react';
import PropTypes from 'prop-types';
 
// Redux
// import {store} from './store';
import {connect} from 'react-redux';
// Redux - actions
import {setSelectedCity} from './../actions';

// Components
import LocationList from './../components/LocationList';

class LocationListContainer extends Component {
  
    handleSelectionLocation = (city) => {
      // Redux - store
      this.props.setCity(city);
    }

    render() {
        return (
            <LocationList 
                cities={this.props.cities} 
                onSelectedLocation={this.handleSelectionLocation} 
            />
        );
    }
}

LocationListContainer.propTypes = {
    setCity: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired
};

// Connect
const mapDispatchToProps = dispatch => ({
  setCity: value => dispatch(setSelectedCity(value))
});


export default connect(null, mapDispatchToProps)(LocationListContainer);
