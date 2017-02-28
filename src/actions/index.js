import axios from 'axios';
import weatherIcons from '../data/icons';

const APIKEY = '9eddb87de3500e438f2b49b606e6121e';
const BASEURL = `http://api.openweathermap.org/data/2.5/weather?appid=${APIKEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';
export const DELETE_WEATHER = 'DELETE_WEATHER';
export const REFRESH_WEATHER = 'REFRESH_WEATHER';


export function fetchWeather(city) {

    //@todo: check if city has name and coutry props
    //@todo: make ajax request by id instead
    const url = `${BASEURL}&q=${city.name},${city.country}`;
    const request = axios
        .get(url);
        // .then((response) => {
        //
        //     console.log(response);
        //     let prefix = 'wi wi-';
        //     let code = response.weather[0].id;
        //     console.log(weatherIcons);
        //
        //     let icon = weatherIcons[code].icon;
        //     //
        //     if (!(code > 699 && code < 800) && !(code > 899 && code < 1000)) {
        //         icon = 'day-' + icon;
        //     }
        //     console.log(icon);
        //     //
        //     // response.weather[0].icon = prefix + icon;
        //     return response;
        // });


    return {
        type: FETCH_WEATHER,
        payload: request
    }
}

export function deleteWeather(index) {
    return {
        type: DELETE_WEATHER,
        payload: index,
    }
}

export function refreshWeather(id, index) {
    const url = `${BASEURL}&id=${id}`;

    const request = axios
        .get(url)
        .then((response) => {
            response.data.index = parseInt(index);
            return response
        });
    // .then((response) => {
    //     let prefix = 'wi wi-';
    //     let code = response.weather[0].id;
    //     let icon = weatherIcons[code].icon;
    //
    //     if (!(code > 699 && code < 800) && !(code > 899 && code < 1000)) {
    //         icon = 'day-' + icon;
    //     }
    //
    //     response.data.icon = prefix + icon;
    //     return response;
    // });

    return {
        type: REFRESH_WEATHER,
        payload: request,
    }

}