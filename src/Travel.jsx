import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Services from './Services';
import { Route, Routes } from 'react-router-dom';
import Contact from './Contact';
import './Travel.css'
const Travel=()=>{
return(
   <>
   <Navbar/>
   <Routes>
   <Route path='/'element={<Home cname="hero" divtext="textdiv"/>} ></Route>
   <Route path='/about' element={<About cname="hero" divtext="textdiv"/>}></Route>
   <Route path='/service' element={<Services cname="hero" divtext="textdiv"/>}></Route>
   <Route path='/contact' element={<Contact cname="hero" divtext="textdiv"/>}></Route>
   </Routes>
   </>
)
}
export default Travel;