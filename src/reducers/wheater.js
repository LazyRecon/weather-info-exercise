import { FETCH_WEATHER , DELETE_WEATHER, REFRESH_WEATHER } from '../actions/index';
export default function (state = [], action) {

    switch (action.type){
        case FETCH_WEATHER:
            return [ action.payload.data, ...state ];

        case DELETE_WEATHER:

            return state.filter((item,index) =>{
                return index != action.payload;
            });

        case REFRESH_WEATHER:

            return state.map((item,index) =>{
                return ((index === action.payload.data.index) ? action.payload.data : item);
            });

    }

    return state;
}