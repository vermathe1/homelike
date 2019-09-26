import {combineReducers} from 'redux';
import apartmentsListReducer from './apartmentsListReducer';
import apartmentReducer from './apartmentReducer';
import locationFilterReducer from './locationFilterReducer';
import amenitiesFilterReducer from './amenitiesFilterReducer';



export default combineReducers({
    apartmentsList: apartmentsListReducer,
    apartmentItem: apartmentReducer,
    locationFilter: locationFilterReducer,
    amenitiesFilter: amenitiesFilterReducer
})
