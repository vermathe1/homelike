import React from 'react';
import { ImageListing } from './commons/imageListing'
import { ImageDetails } from './commons/imageDetails'

export default class ApartmentTileView extends React.Component {

  render() {
    let {apartment} = this.props;
    let url = '/apartments/' + apartment._id;
    let image = 'http://localhost:5000/images/apartments/' + apartment.images[0];

    return (
      <div className="view-apartment-item">
        <div className="view-apartment-item-content">
          <a target ="_blank" href={url}>
            <div className="_3im4pDXrDfzNRT2AlvLfD6">
            { <div>
                <ImageListing image = {image} price ={apartment.price}/> 
                <ImageDetails apartment={apartment} />
              </div>
            }
           </div>
          </a>
        </div>
      </div>
    )
  }
}
