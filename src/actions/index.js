import transformForecast from './../services/transformForecast';

// Constants
import {SET_CITY, SET_FORECAST_DATA} from './../constants/redux';
import {APIKEY, URLBASEFORECAST, METRICUNITS} from './../constants/weather';

const setCity = payload => ({type: SET_CITY, payload });
const setForecastData = payload => ({type: SET_FORECAST_DATA, payload});

export const setSelectedCity = payload => {
    return dispatch => {
        // Url to send petitions
        const urlForecast = `${URLBASEFORECAST}?q=${payload}&appid=${APIKEY}${METRICUNITS}`;

        // Activar en el estado un indicador de busqueda de datos
        dispatch(setCity(payload));

        // Fetch to ask weather information to server
        return fetch(urlForecast).then(
            data => (data.json())
        ).then(
            WeatherData => {
                const forecastData = transformForecast(WeatherData);   
                console.log(forecastData);
                // this.setState({ forecastData });

                // Modify state with promisse response (fetch)
                dispatch(setForecastData({city: payload, forecastData}))
            }
        );
    }
}