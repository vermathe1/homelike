import React from 'react';

export const ImageListing = ({image,price}) => {

    const imageListingStyle= {backgroundImage: `url(${image})`, backgroundPosition: 'center', backgroundSize: 'cover'}
    return(
        <div className="listing-image">
            <div className="media-cover" style={imageListingStyle}></div>
            <div className="_3Ts2_4uirKsrlm2Qb57Avw"></div>
            <div className="Ok22VaqPDW9x1uaR46cRO _3ORDzmMDnpzTXIIXjJsRw7">
                <span>{price} €</span>
                <span className="_17Hci6D5EewOTY42eIXhPy">
                <span className="_2GcdOjvYR400SpIsNOxzGK">/</span>
                <span>Monat</span>
                </span>
            </div>
        </div>
    )
  
}




