import React, {Component} from 'react';

// Proptypes
import PropTypes from 'prop-types';

// Styles
import './style.css';
import CircularProgress from '@material-ui/core/CircularProgress';

// Components
import Location from './Location';
import WeatherData from './WeatherData';

// Services
import getWeather from './../../services/getWeatherFromApi';
import transforWeather from './../../services/transformWeather';

// Cities for explore weather
const cities = ['Buenos Aires', 'Barcelona', 'Bogotá', 'Medellín', 'Santiago,cl', 'London', 'New York', 'Paris', 'Tokio', 'Melbourne', 'Vancouver', 'Rio de Janeiro', 'Ushuaia', 'Cairo', 'Moscow'];


class WeatherLocation extends Component {
    constructor(props){
        super(props);

        const {city} = this.props; 

        // Initial State
        this.state = {
            city,
            data: null
        };
    }

    // Component did mount to charge Bucaramanga weather
    componentDidMount(){
        const apiWeather = getWeather(this.state.city);

        // Fetch promise to get current weather
        fetch(apiWeather).then( (resolve, rejected) => {
            return resolve.json();
        })
        .then(data => { 
            // In case of error
            if(data.cod !== 200){
                return null;
            }

            // Apply tranforms to new data
            let newData = transforWeather(data);
            
            this.setState({ 
                city: newData.city,
                data: newData.data
            });
        })
        .catch((err) => {
            console.log('hubo error');
        });
    }

    handleUpdateClick = () =>{
        // Random with possible cities
        const random = (Math.random()*(cities.length -1)).toFixed();
        const location = cities[random];

        const apiWeather = getWeather(location);

        // Fetch promise to get current weather
        fetch(apiWeather).then( resolve => {
            return resolve.json();
        })
        .then(data => {
            // In case of error
            if(data.cod !== 200){
                return null;
            }
            
            // Apply tranforms to new data
            let newData = transforWeather(data);
            
            this.setState({ 
                city: newData.city,
                data: newData.data
            });
        })
        .catch((err) => {
            console.log('hubo error');
        });
    }

    // Example of promise
    // promesa(){
    //     console.log('comienza la promesa');
    //     let promesa = new Promise( (resolve, rejected) => {
    //         setTimeout(() => {
    //             rejected("Fracaso total mijo!");
    //         }, 2000 );
    //     });

    //     promesa.then( (mensaje) => {
    //         console.log(mensaje);    
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     })
    // }

    showWeatherComponent = () => {
        const {city, data} = this.state;
 
        if(city && data){
            return(
                <React.Fragment>
                    <Location city={city} />
                    <WeatherData data={data} />
                    {/* <button className="btn btn-primary boton-margen" onClick={this.handleUpdateClick}>Explorar</button> */}
                </React.Fragment>
            );
        }

        return(<CircularProgress size={60} />); 
    }

    render() { 

        const {onWeatherLocationClick} = this.props;

        return (
            <div className="weather-location-cont" onClick={onWeatherLocationClick}>
                {this.showWeatherComponent()}
            </div>
        );
    }
}

// PropTypes
WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func.isRequired,
}
 
export default WeatherLocation;