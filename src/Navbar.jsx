import React from 'react'
import { NavLink } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.min.js"
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
function Navbar()
{
    return(
        <>
        <div className='container-fluid nav_bg'>
          <div className='row'>
          <div className='col-10 mx-auto'>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          {/* //<NavLink className="navbar-brand"><FlightTakeoffIcon/>A.D</NavLink> */}
         <h5>gOHigh<FlightTakeoffIcon className="navbar-brand"/></h5>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
           aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/service">Services</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">Contact</NavLink>
              </li>
              <button style={{backgroundColor:"skyblue", borderRadius:"50px"}}>
                <a className="nav-link" href="https://www.amazon.in/b/?_encoding=UTF8&ie=UTF8&node=86746252031&
                pd_rd_w=XUiYJ&content-id=amzn1.sym.75364221-0e6f-4f1b-91b9-41945f634805&pf_rd_p=75364221-0e6f-
                4f1b-91b9-41945f634805&pf_rd_r=GH8TFKKXNFNXQKH15NBQ&pd_rd_wg=8nAFu&pd_rd_r=f7924634-1025-4ce3-9ea8
                -9435a549d1d5" target='blank'>Book Now</a>
              </button>
            </ul>
          </div>
        </div>
      </nav>
      </div>
    </div>
  </div>
  </>)}

//   <ul class="nav nav-pills ">
//   <li class="nav-item">
//     <NavLink class="nav-link active" aria-current="page" to="/">Home</NavLink>
//   </li>
//   <li class="nav-item">
//     <NavLink class="nav-link" to="/about">About</NavLink>
//   </li>
//   <li class="nav-item">
//     <NavLink class="nav-link" to="/contact">Contact</NavLink>
//   </li>
//   <li class="nav-item">
//     <NavLink class="nav-link disabled" aria-disabled="true">Disabled</NavLink>
//   </li>
// </ul>
//       </>
//     )
// } 
export default Navbar;
