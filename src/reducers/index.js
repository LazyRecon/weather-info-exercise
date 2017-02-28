import {combineReducers} from 'redux';
import citiesReducer from './city';
import weatherReducer from './wheater';

const rootReducer = combineReducers({
    cities: citiesReducer,
    weather : weatherReducer
});

export default rootReducer;
