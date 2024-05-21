import React, { Component } from "react";
import { MenuData } from "./MenuData";
// import {bootstrap} from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import "./navbar_css.css";

import Dropdown from "./Dropdown";
import { AuthContext } from "../../hooks/context/AuthContext";
import { useContext } from "react";
import Alert from 'bootstrap/js/dist/alert';
import logo from './lab.png';
import iiti from './iiti2.jpg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// or, specify which plugins you need:
import { Tooltip, Toast, Popover } from 'bootstrap';
const Navbar=()=>{

  // const bootstrap = require('bootstrap')
   const {user,dispatch, logout} =useContext(AuthContext);

 
 
 
console.log("hi console");
const handlelogClick=()=>{
   
  //   toast.info('Logout Succesfully ', {
  //     position: toast.POSITION.TOP_CENTER
  // });
  console.log("logout");
  dispatch({ type: "LOGOUT" });
 logout();
 toast.success("Logout Successfully");
    setTimeout(() => {
         window.location.reload(false);
    }, 1000);
  navigate.push("/");
}
console.log(user);

    return (
      <>
    <ToastContainer position="top-center"/>

  <nav class="navbar navbar-dark bg-dark fixed-top">
  <div class="container-fluid">
    
    <a class="navbar-brand" href="#"> <img src={iiti} alt="" style={{width:"4rem",height:"4rem",borderRadius:"20px"}} /> <img src={logo} alt="" style={{width:"4rem",height:"4rem",borderRadius:"20px"}} /> &nbsp;Indian Key Biodiversity Areas</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Indian Key Biodiversity Areas</h5>
      
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        
      </div>
      <div class="offcanvas-body">
      {/* {user ? <>
          <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Welcome , {user.username}</h5>
        </>:<></>} */}
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li class="nav-item">
            {user ? <> <a class="nav-link active" aria-current="page" onClick={handlelogClick} href="/">Logout</a> </>: <><a class="nav-link active" aria-current="page" href="/login">Login</a></>
            }
           
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/aboutus">About Us</a>
          </li>
          <li class="nav-item">
            
            {user ? <> <a class="nav-link" href="/graph_spi">Standardized Precipitation Index (SPI) Graph</a> </>: <></>
            }
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Drought Types
            </a>
            <ul class="dropdown-menu dropdown-menu-dark">
              <li><a class="dropdown-item" href="/spi">Standardized Precipitation Index (SPI)</a></li>
              <li><a class="dropdown-item" href="/sri">Standardized Runoff Index (SRI)</a></li>
              <li><a class="dropdown-item" href="/ssi">Standardized Soil Moisture Index (SSI)</a></li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              {/* <li><a class="dropdown-item" href="#">Something else here</a></li> */}
            </ul>
          </li>
          <li class="nav-item dropdown">
            {user ? <>  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Update/Delete  Drought Types
            </a></>:<></>
            }
            <ul class="dropdown-menu dropdown-menu-dark">
              <li><a class="dropdown-item" href="/search_spi">Standardized Precipitation Index (SPI)</a></li>
              <li><a class="dropdown-item" href="/search_sri">Standardized Runoff Index (SRI)</a></li>
              <li><a class="dropdown-item" href="/search_ssi">Standardized Soil Moisture Index (SSI)</a></li>
              <li>
                <hr class="dropdown-divider" />
              </li>
            
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Precipitation Extremes
            </a>
            <ul class="dropdown-menu dropdown-menu-dark">
              <li><a class="dropdown-item" href="/cwd_extreme">CWD</a></li>
              <li><a class="dropdown-item" href="/prcptop_extreme">PRCPTOP</a></li>
              <li><a class="dropdown-item" href="/r10_extreme">R10</a></li>
              <li><a class="dropdown-item" href="/r20_extreme">R20</a></li>
              <li><a class="dropdown-item" href="/r95_extreme">R95</a></li>
              <li><a class="dropdown-item" href="/r99_extreme">R99</a></li>
              <li><a class="dropdown-item" href="/rx1_extreme">Rx1Day</a></li>
              <li><a class="dropdown-item" href="/sdii_extreme">SDII</a></li>


              <li>
                <hr class="dropdown-divider" />
              </li>
              {/* <li><a class="dropdown-item" href="#">Something else here</a></li> */}
            </ul>
          </li>
        </ul>
        {/* <form class="d-flex mt-3" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button class="btn btn-success" type="submit">Search</button>
        </form> */}
      </div>
    </div>
  </div>
</nav>
</>
    )
  
}

export default Navbar;
