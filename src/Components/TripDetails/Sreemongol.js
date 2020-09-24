import React from 'react';
import './TripDetails.css'
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

const Sreemongol = () => {


    return (
        <div style={bgStyle}>
            <Header/>
            <div className=" container details-container">
                <div className="col-md-7 title">
                <h1>SREEMONGOL</h1>
                <p><small>Sreemangal is situated in Moulvibazar district in Sylhet division. Sreemangal is an Upazila. It is famous for tea garden. Rain all time occurs here. Nature has adorned Sreemangal with green tress. Its natural scenery is very charming.You can go “Nilkantha” tea stall near BDR camp here you’ll get seven layers tea which is very uncommon tea in Bangladesh. Don’t forget to visit “Tea museum” in “British karighor” tea resort. Lawasara, Madhabpur Lake is nearest tourist spots near Sreemangal.</small></p>
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

export default Sreemongol;