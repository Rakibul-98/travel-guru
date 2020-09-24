import React from 'react';
import Header2 from '../Header/Header2';

const NoMatch = () => {

    const noMatchstyle={
        marginTop:'50px',
        textAlign:'center'
    }
    
    return (
        <div style= {noMatchstyle} >
            <Header2/>
            <h4 style={{marginTop:"50px"}}>Your requested page not found...</h4>
            <h1 className="text-danger font-weight-bolder" >404 : Error !!!!</h1>
        </div>
    );
};

export default NoMatch;