// import {setCity} from './../actions';
import {SET_CITY} from './../constants/redux';

export const city = (state = {}, action) => {
    switch (action.type) {
        case SET_CITY:
            return action.payload;
    
        default:
            return state;
    }
  }