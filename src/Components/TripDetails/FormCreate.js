import React, { useContext } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import DatePickers from '../Date/DateSelector';



const FormCreate = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    let isFieldValid = true;
    const handleBlur = (e) =>{
       if (e.target.name === "destination") {
        const location1 = e.target.value === "Cox's Bazar";
        const location2 = e.target.value === "Sreemongol";
        const location3 = e.target.value === "Sundarbans";
        const isLocationValid = location1 || location2 || location3;
        isFieldValid = isLocationValid;
       }

       if (isFieldValid) {
           const newLocation = {...loggedInUser};
           newLocation[e.target.name] = e.target.value
           setLoggedInUser(newLocation);
       }
    }


    const history = useHistory();
    const handleSubmit = (e) =>{
        if (isFieldValid) {
            history.replace("/book")
        }
        e.preventDefault();
    } 

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <p>Origin <br/> <input className="form-control" type="text" value="Dhaka" required/></p>
                <p>Destination <br/> <input onBlur={handleBlur} className="form-control" name="destination" type="text" required/></p>
                    <Row>
                        <Col>
                        <p style={{width:'175px'}} >From <br/>
                        <DatePickers required/></p>
                        </Col>

                        <Col>
                        <p style={{width:'175px'}} >To <br/>
                        <DatePickers required/></p>
                        </Col>
                    </Row>
                <p><input className="main-btn form-control" type="submit" value="Start Booking"/></p>
            </form>
        </div>
    );
};

export default FormCreate;