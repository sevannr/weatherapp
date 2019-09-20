import React, { Component } from 'react';

// PropTypes
import PropTypes from 'prop-types';

// Styles
import './style.css';
import CircularProgress from '@material-ui/core/CircularProgress';

// Constants 
import {APIKEY, URLBASEFORECAST, METRICUNITS} from './../constants/weather';

// Components
import ForecastItem from './ForecastItem';

// Services
import transformForecast from './../services/transformForecast';


class ForecastExtended extends Component {
    constructor(props){
        super(props);

        this.state = { forecastData: null };
    }

    componentDidMount() {
        this.updateCity(this.props.city);
    }

    //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
    componentWillReceiveProps(nextProps) {
        if(nextProps.city !== this.props.city){
            // Send state to null for watching "charging" for a while
            this.setState({ forecastData: null });
            this.updateCity(nextProps.city);
        }
    }

    updateCity = (city) => {
        // Url to send petitions
        const urlForecast = `${URLBASEFORECAST}?q=${city}&appid=${APIKEY}${METRICUNITS}`;

        // Fetch to ask weather information to server
        fetch(urlForecast).then(
            data => (data.json())
        ).then(
            WeatherData => {
                const forecastData = transformForecast(WeatherData);              
                this.setState({ forecastData });
            }
        )
    }
    
    // Weather information to render
    renderForecastItemDays = (forecastData) => {
        return(
            forecastData.map( forecast => 
                <ForecastItem 
                    weedDay={forecast.weedDay} 
                    hour={forecast.hour} 
                    data={forecast.data.data} 
                    key={`${forecast.weedDay}${forecast.hour}`} 
                /> 
            )
        );
    }

    // Render this while getting weather information server
    renderProgress = () => {
        return(<CircularProgress size={60} />); 
    }

    render() {
        const {city} = this.props;
        const {forecastData} = this.state;

        return (
            <div className="p-2">
                <h3 className="forecast-title"> Pronóstico para {city} </h3>
                {forecastData ? 
                    this.renderForecastItemDays(forecastData) : 
                    this.renderProgress()
                }
            </div>
        );
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired
};

export default ForecastExtended;