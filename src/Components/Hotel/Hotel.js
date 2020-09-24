import React from 'react';
import './Hotel.css'

const Hotel = (props) => {
    const {name, description, condition, rating, price, photo, duration, logo} = props.hotels;
    return (
        <div>
            <div className="col-md-7 hotel-container">
                <img src={photo} alt=""/>
                <div className="text-container">
                    <h6>{name} </h6>
                    <p><small>{description}</small></p>
                    <p><small>{condition}</small> </p>
                    <p><small><img src={logo} alt=""/> <span style={{fontWeight:"bold"}}>{rating}</span> <span style={{marginLeft:"30px",fontWeight:"bold"}}>{price}</span> {duration}</small> </p>
                </div>
            </div>
        </div>
    );
};

export default Hotel;