import React, { useContext } from 'react';
import hotel1 from '../../images/Rectangle 26.png';
import hotel2 from '../../images/Rectangle 27.png';
import hotel3 from '../../images/Rectangle 28.png';
import Header2 from '../Header/Header2';
import Hotel from '../Hotel/Hotel';
import logo from '../../Icon/star_1_.png';
import { UserContext } from '../../App';
import SimpleMap from '../Hotel/MapCreate';



const Book = () => {

    const loggedInUser = useContext(UserContext);

    const hotels =[
        {id : 1, name : "Hotel Cox Today", description : "4 Guests, 2 Bedrooms, 2 beds, 2 Baths, WiFi facilities Air Conditioning kitchen Natural view", condition: "Cancellation flexibility available", rating :"4.9(20)", logo: logo,  price :"$34/",  duration:"night", photo : hotel1},
        {id : 2, name : "Hotel Seagull", description : "4 Guests, 2 Bedrooms, 2 beds, 2 Baths, WiFi facilities Air Conditioning kitchen Natural view", condition: "Cancellation flexibility available", rating :"4.8(31)", logo: logo,  price :"$22/",  duration:"night", photo : hotel2},
        {id : 3, name : "Hotel Green Leaf", description : "4 Guests, 2 Bedrooms, 2 beds, 2 Baths, WiFi facilities Air Conditioning kitchen Natural view", condition: "Cancellation flexibility available", logo: logo, rating :"4.9(18)", price :"$37/", duration:"night", photo : hotel3}
    ]

    const style={
        borderTop:"1px solid grey",
        display:"flex"
    }
    return (
        <div>
            <Header2/>
            <div style={style} className="container">
                <div className="col-md-7">
                    <p style={{marginTop:"20px"}}><small>253 stays Apr 13-17 3 guests</small></p>
                    <h5 style={{fontWeight:"bold"}}>Stay in Cox's Bazar </h5>
                    {
                        hotels.map( hotel => <Hotel hotels={hotel} key={hotel.id} ></Hotel>)
                    }
                </div>
                <div className="col-md-5">
                    <SimpleMap/>
                </div>
            </div>
        </div>
    );
};

export default Book;