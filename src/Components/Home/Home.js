import React from 'react';
import Header from '../Header/Header';
import Trip from '../Trip/Trip';
import Background from '../../images/Rectangle 1.png'


const bgStyle={
     backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ), url("${Background}")`,
     backgroundPosition: 'center',
     backgroundSize: 'cover',
     backgroundRepeat: 'no-repeat',
     overflow: 'hidden',
     width: '100%',
     height: '800px',
}
const Home = () => {
    return (
        <div style={bgStyle}>
            <Header/>
            <Trip/>
        </div>
        
    );
};

export default Home;