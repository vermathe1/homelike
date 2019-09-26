import React from 'react';
import {connect} from 'react-redux';
import {fetchApartmentsList} from './../actions/apartmentsListActions';
import ApartmentTileView from "./ApartmentTileView";
import { Dropdown } from '../components/Dropdown';
import { Select } from '../components/select';
import { filterByLocation } from '../actions/filterByLocationAction'
import { filter } from '../actions/filter'
import { ApartmentContainer } from './commons';
import { LoadingItems } from './loadingItems'

class ApartmentViewByLocation extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      amneties:[]
    }
  }

  componentDidMount() {
    fetchApartmentsList()(this.props.dispatch);
  }

  handleAmnetiesSelectChange = ( e ) => {
    let name = e.target.name;
    if(this.state.amneties.indexOf(name) === -1) {
        this.setState({
            amneties : [...this.state.amneties, name]
        })
    }
    else{
        let newAmneties = this.state.amneties.filter(amnety => amnety != name);
        this.setState({
            amneties : newAmneties
        })
    }
  }

  handlefilterSubmit = () => {
      this.props.handleFilterSubmit(this.state.amneties);
  }

  render() {
    let {apartmentsList} = this.props;
    if (!(apartmentsList.length)) {
      if(this.props.selectedLocation){
         return (
          <LoadingItems type="notfound" onlocationChange={this.props.onlocationChange}/>
          )
      }
      else{
         <LoadingItems type="loading" onlocationChange={this.props.onlocationChange}/>
      }
    }
    return (
      <div className = "container-list container-lg">
        <div style={{display: 'flex' , margin:'20px'}}>
        <Dropdown onChange = { this.props.onlocationChange } options={["Berlin","Bangalore","Kathmandu"]} title="Please search by location"/>
        <Select title="Add more Filters" options = {["television", "elevator", "fridge", "heating", "cooker", "microwave"]} onChange={this.handleAmnetiesSelectChange} handleSubmit={this.handlefilterSubmit}/>
        </div>
        
        <ApartmentContainer items ={apartmentsList}/>
      </div>
    )
  }
}


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

const getFilteredListByAmenities = (list,amenitiesFilter) => {
  return list.filter(aptObj =>{
      let NotToFilter = true;
      let amenities = aptObj.amenities;
        for(let i = 0; i<amenitiesFilter.length; i++){
          if(NotToFilter){
            if((amenities.indexOf(amenitiesFilter[i])) == -1){
              NotToFilter =  false;
            }
          }
        }
        return NotToFilter;
  })
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
  var apartmentsList = getFilteredList(state.apartmentsList.apartments.items ,state.locationFilter);

  if(apartmentsList.length && (state.amenitiesFilter.length)){
    apartmentsList = getFilteredListByAmenities(apartmentsList ,state.amenitiesFilter);
  }
  return{
    apartmentsList: apartmentsList,
    selectedLocation : state.locationFilter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onlocationChange:(value)=>{dispatch(filterByLocation(value))},
    handleFilterSubmit : (value) => {dispatch(filter(value))},
    dispatch
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ApartmentViewByLocation)
