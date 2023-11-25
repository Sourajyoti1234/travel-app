import React from 'react';
import './Home.css';
import Tripdata from './Tripdata';
const Trip=()=>{
    return(
        <div>
        <div className='destination'>
        <h1>Recent Trip</h1>
        <p>You can discover unique destinations using Google Maps.</p>
        </div>
        <Tripdata/>
        </div>
    )
}
export default Trip;