import React from 'react';
//import Service from '../src/Image/Service.jpg';
import './Home.css';
import Footer from "./Footer";
//import Cards from './Cards';
import Cards from './Cards';
function Services()
{
    return(
        <>
        <div className="hero">
       <img src='Image/Service.jpg' className="vsize" alt="Missing"/>
       <div className="textdiv">
       <h1>SERVICE</h1>
       </div>
       </div>
        <Cards/>
        <Footer/>
        </>
    )
}
export default Services;