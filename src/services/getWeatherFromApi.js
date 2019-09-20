// Constants
import { APIKEY, URLBASEWEATHER, METRICUNITS } from './../constants/weather';

// Return full url to get API service by location
const getWeather = location => {    

    return `${URLBASEWEATHER}?q=${location}&appid=${APIKEY}${METRICUNITS}`;
}

export default getWeather;