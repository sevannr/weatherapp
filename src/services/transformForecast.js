import moment from 'moment';
// Change to spanish response data
import 'moment/locale/es';

import transforWeather from './transformWeather';

const transformForecast = (data) => (
    data.list.filter(item => (
        // moment.unix(item.dt).utc().hour() === 6 ||
        // moment.unix(item.dt).utc().hour() === 12 ||
        // moment.unix(item.dt).utc().hour() === 18
        moment.unix(item.dt).hour() === 6 ||
        moment.unix(item.dt).hour() === 12 ||
        moment.unix(item.dt).hour() === 18
    )).map(item => ({
        weedDay: moment.unix(item.dt).format('ddd'),
        hour: moment.unix(item.dt).hour(),
        data: transforWeather(item)
    }))
)
 
export default transformForecast;