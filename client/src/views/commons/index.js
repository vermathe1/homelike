import React from 'react';
import ApartmentTileView from "../ApartmentTileView";

export const ApartmentContainer = ({items}) => {
    return(
    <div className="container-list container-lg clearfix">
        <div className="col-12 float-left">
            <div className="view-apartment-list">
                {items.map((item, index) => (
                    <ApartmentTileView key={index} apartment={item} />
                ))}
            </div>
        </div>
    </div>
    )
  
}