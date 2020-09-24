import React from 'react';
import './TripDetails.css';
import Header from '../Header/Header';
import Background from '../../images/Rectangle 1.png'
import FormCreate from './FormCreate';


const bgStyle={
    backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ), url("${Background}")`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    overflow: 'hidden',
    width: '100%',
    height: '700px',
}

const CoxBazar = () => {


    return (
        <div  style={bgStyle}>
            <Header/>
            <div className="container details-container">
                <div className="col-md-7 title">
                    <h1>COX'S BAZAR</h1>
                    <p><small>The beach in Cox's Bazar is the main attraction of the town with an unbroken length of 155 km (96 mi) also termed the "longest natural unbroken sea beach" in the world. There are several 3 stars and 5 star hotels provide the exclusive beachside area with accessories for the tourist. Visitors in other hotels visit Laboni beach which is the area of the beach closest to the town. Other than the beach there are several places of interest near the town which can easily be visited from the town center</small>
                    </p>
                </div>
                <div className="card">
                    <div className="container">
                        <FormCreate/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoxBazar;