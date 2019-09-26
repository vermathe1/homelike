import React from 'react';
import { Dropdown } from '../components/Dropdown';
import { Select } from '../components/select';

export const LoadingItems = ({type,onlocationChange}) =>{
    return (
      <div className="container container-list" >
       <Dropdown onChange = { onlocationChange } options={["Berlin","Bangalore","Kathmandu"]} title="Please search by location"/>
      {type === "Loading" ? <div>Loading..</div> : <div>Sorry!! We dont have apartments with your current selection..</div>}
      </div>
      )
  }
