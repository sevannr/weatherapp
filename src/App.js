import React, { Component } from 'react';

// PropTypes
// import PropTypes from 'prop-types';
 
// Redux
// import {store} from './store';
// import {connect} from 'react-redux';
// Redux - actions
// import {setCity} from './actions';

// Styles
import './App.css';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
// import Typography from '@material-ui/core/Typography';
// import Toolbar from '@material-ui/core/Toolbar';

// Data
import {cities} from './data/cities';

// Styles
import { Grid, Row, Col } from 'react-flexbox-grid';

// Components
// import WeatherLocation from './components/WeatherLocation';
// import { MuiThemeProvider } from '@material-ui/core';
import LocationListContainer from './containers/LocationListContainer';
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';

class App extends Component {

  // constructor(){
  //   super();

  //   const initialState = {
  //     city: null
  //   };

  //   this.state = initialState;
  // }
  
  // handleSelectionLocation = (city) => {
  //   this.setState({ city });   

  //   // Redux - store
  //   this.props.setCity(city);
  // }

  render() { 

    // const {city} = this.state;

    return ( 
      // <MuiThemeProvider>
      <Grid>
        <Row>
          {/* <AppBar position='sticky'>
            <Toolbar>
              <Typography variant='title' color='inherit'>
                Weather App
              </Typography>
            </Toolbar>
          </AppBar> */}
          <Col xs={12}>
            <AppBar title="Weather App" />
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={6}>
            <div className="prueba">
            <LocationListContainer cities={cities} />
            </div>
          </Col>
          
          <Col xs={12} md={6}>
            <Paper elevation={4}>
              <div className="lista">
                {/* { city && <ForecastExtendedContainer /> } */}
                <ForecastExtendedContainer />
              </div>
            </Paper>
          </Col>
        </Row>          
      </Grid>
      // </MuiThemeProvider>
     );
  }
}

// App.propTypes = {
//   setCity: PropTypes.func.isRequired
// }

// Connect
// const mapDispatchToProps = dispatch => ({
//   setCity: value => dispatch(setCity(value))
// });

// export default connect(null, mapDispatchToProps)(App);
export default App;
