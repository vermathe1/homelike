import React from 'react';
import {connect} from 'react-redux';
import {fetchApartmentsList} from './../actions/apartmentsListActions';
import ApartmentTileView from "./ApartmentTileView";
import { Dropdown } from '../components/Dropdown';
import { filterByLocation } from '../actions/filterByLocationAction'

class ApartmentViewByLocation extends React.Component {

  componentDidMount() {
    fetchApartmentsList()(this.props.dispatch);
  }

  render() {
    let {apartmentsList} = this.props;
    if (!(apartmentsList.length)) {
      if(this.props.selectedLocation){
         return (
          <div className="container container-list" >
           <Dropdown onChange = { this.props.onlocationChange } options={["Berlin","Bangalore","Kathmandu"]}/>
          <div>Sorry!! We dont have apartments at {this.props.selectedLocation}</div>
          </div>
          )

      }
      else{

         return (
          <div className="container container-list" >
           <Dropdown onChange = { this.props.onlocationChange } options={["Berlin","Bangalore","Kathmandu"]}/>
          <div>Loading...</div>
          </div>
          )


      }
       
      

    }

    return (
      <div className="container-list container-lg clearfix">
        <Dropdown onChange = { this.props.onlocationChange } options={["Berlin","Bangalore","Kathmandu"]}/>
        <div className="col-12 float-left">
          <div className="view-apartment-list">
            {apartmentsList && apartmentsList.map((item, index) => (
                <ApartmentTileView key={index} apartment={item} />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

const getFilteredList = (list,filter) => {
  console.log(filter)
  switch(filter) {
    case 'SHOW_ALL': {
      console.log("filtering")
      return list; 
    }
    default:
      return list.filter(apt =>{
        return filter === apt.location.title
      })
  }
};

const isEmpty = (obj) => {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

const mapStateToProps = state =>{
  if(isEmpty(state.apartmentsList.apartments)){
    return {apartmentsList : []}
  }
  return{
    apartmentsList: getFilteredList(state.apartmentsList.apartments.items ,state.locationFilter),
    selectedLocation : state.locationFilter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onlocationChange:(value)=>{dispatch(filterByLocation(value))},
    dispatch
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ApartmentViewByLocation)
