// Constants
import { CLOUD, SUN, RAIN, SNOW, FOG, THUNDER, DRIZZLE } from './../constants/weather';

// Get the icon
const getWeatherState = (weatherData) => {
    const {id} = weatherData;

    if(id < 300){
        return THUNDER;
    } else if(id < 400){
        return DRIZZLE;
    } else if( id < 600 ){
        return RAIN;
    } else if( id < 700){
        return SNOW;
    } else if( id === 741){
        return FOG;
    } else if( id === 800){
        return SUN;
    } else {
        return CLOUD;
    }
}

// Transform data from API promise
const transforWeather = weatherData => {
    const city = `${weatherData.name} - ${weatherData.sys.country}`;
    var {humidity, temp} = weatherData.main;
    const {speed} = weatherData.wind;
    const weatherState = getWeatherState(weatherData.weather[0]);
    // const {weatherState} = weatherData.weather[0].main;

    // Redondear a máximo solo 1 decimal
    temp = Number(temp.toFixed(1));

    // New data info
    const data = {
        city,
        data: {
            humidity,
            temperature: temp,
            weatherState,
            wind: `${speed} m/s`
        }
    }

    return data;
}

export default transforWeather;