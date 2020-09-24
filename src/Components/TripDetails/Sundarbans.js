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

const Sundarbans = () => {


    return (
        <div style={bgStyle}>
            <Header/>
            <div className="container details-container">
                <div className="col-md-7 title">
                <h1>SUNDARBANS</h1>
                <p><small>Sundarbans is one of the most natural beauties of beautiful Bangladesh.Sundarban has many tourist spots for observing its beauty but you have to go there on boat. For not just the Bangladeshi travellers but international tourists as well, the UNESCO World Heritage Site, Sundarbans holds an unparalleled charm mainly because of its mysterious ambiance and rich wildlife. Perhaps one of the most-liked tourist places in Bangladesh.</small></p>
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

export default Sundarbans;