import React, { useEffect } from "react";
//import video from ;
import './Home.css';
import Trip from "./Trip";
import Cards from "./Cards";
import Footer from "./Footer";
const Home=()=>
{
  useEffect(()=>{document.title=`gohigh`;});
    return(
      <>
      <div className="hero">
      <video src='Image/video.mp4' autoPlay muted loop type="video/mp4"  className="vsize" alt='video'>
       </video>
       <div className="textdiv">
       <h1>Your Dream Our Duty</h1>
       <p>Choose Your Dream Destination.</p>
       </div>
       </div>
       
       <Trip/>
       <Cards/>
       <Footer/>
  </>     
    )
}
export default Home;