import React from 'react';
import {connect} from 'react-redux';
import {fetchApartmentsList} from './../actions/apartmentsListActions';
import { ApartmentContainer } from './commons';

class HomeView extends React.Component {
  componentWillMount() {
    this.props.fetchApartmentsList();
  }

  render() {
    let {apartmentsList} = this.props;
    if (!Object.keys(apartmentsList).length) {
        return <div>Loading...</div>
    }
  
    return (
     <ApartmentContainer items ={apartmentsList.items}/>
    )
  }
}

const mapStateToProps = (state,ownProps) => {
  return{
    apartmentsList: state.apartmentsList.apartments
  }
}
 


export default connect(mapStateToProps, {fetchApartmentsList})(HomeView)
