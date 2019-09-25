import React from 'react';
import {connect} from 'react-redux';
import { ApartmentViewByLocation } from './ApartmentViewByLocation'
import { filterByLocation } from '../action/aptLocationChangeAction'

const getFilteredList = (list,filter) => {
  switch(filter) {
    case 'SHOW_ALL': {
      return list; 
    }
    default:
      return list.filter(apt =>{
        return filter === apt.location.title
      })
    
  }
};

const mapStateToProps = state => ({
  apartmentsList: getFilteredList(state.apartmentsList.apartments.items ,state.locationFilter)
});

const mapDispatchToProps = (dispatch) => {
  return {onlocationChnage:(value)=>{dispatch(filterByLocation(value))}};
};



export default connect(mapStateToProps, mapDispatchToProps)(ApartmentViewByLocation)
