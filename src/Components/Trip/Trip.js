import React from 'react';
import { Carousel } from 'react-bootstrap';
import cox from '../../images/Rectangle 1.png'
import sreemangal from '../../images/Sreemongol.png'
import sundarban from '../../images/sundorbon.png'
import './Trip.css'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Link } from 'react-router-dom';

const Trip = () => {
    return (
        <div className="container">
            <div className="carousel-container">
                <Carousel>
                    <Carousel.Item>
                        <div className="row d-flex align-items-center">
                            <div className="col-md-7 intro">
                                <h1>COX'S BAZAR</h1>
                                <p><small>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach. Cox's Bazar is also known by the name Panowa, which translates literally as...</small></p>
                                <Link to= "/cox">
                                   <button className="main-btn"> <small>Booking</small> <ArrowForwardIcon/> </button>
                                </Link>
                            </div>
                            <div className="col-md-5 image-first">
                                <img
                                    className="d-block"
                                    src={cox}
                                    alt="First slide"
                                />
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="row d-flex align-items-center">
                            <div className="col-md-7 intro">
                                <h1>SREEMONGOL</h1>
                                <p><small>Sreemangal is situated in Moulvibazar district in Sylhet division. Sreemangal is an Upazila. It is famous for tea garden. Rain all time occurs here. Nature has adorned Sreemangal with green tress. Its natural scenery is very charming...</small></p>
                                <Link to="/sreemongol">
                                   <button className="main-btn"> <small>Booking</small> <ArrowForwardIcon/> </button>
                                </Link>
                            </div>
                            <div className="col-md-5 image">
                                <img
                                    className="d-block"
                                    src={sreemangal}
                                    alt="First slide"
                                />
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="row d-flex align-items-center">
                            <div className="col-md-7 intro">
                                <h1>SUNDARBANS</h1>
                                <p><small>Sundarbans is one of the most natural beauties of beautiful Bangladesh. This Forest is the largest mangrove forest in the world. Sundarban is a large block of littoral forests. The beauty lies in its unique natural surroundings...</small></p>
                                <Link to ="/sundarbans">
                                   <button className="main-btn"><small>Booking</small><ArrowForwardIcon/> </button>
                                </Link>
                            </div>
                            <div className="col-md-5 image">
                                <img
                                    className="d-block"
                                    src={sundarban}
                                    alt="First slide"
                                />
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
};

export default Trip;