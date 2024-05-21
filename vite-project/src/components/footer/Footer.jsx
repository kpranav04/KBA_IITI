import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter} from '@fortawesome/free-brands-svg-icons';
import { faInstagram} from '@fortawesome/free-brands-svg-icons';
import { faLinkedin} from '@fortawesome/free-brands-svg-icons';
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'bootstrap/dist/css/bootstrap.css';
import logo from './lab.png';


export default function Footer() {
  return (
 <div class="my-5 footercontainer"> 


  <footer class=" text-center text-lg-start text-white footercont">
    
    <div class="container p-4">
     
      <div class="row my-4 footcont">
     
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">

          <div class="rounded-circle bg-white shadow-1-strong d-flex align-items-center justify-content-center mb-4 mx-auto" style={{width: "240px", height: "240px",marginRight:"3rem"}}>
            <img src={logo} height="170px" alt=""
                 loading="lazy" />
          </div>

          <h3 class="text-center text-white"> Indian Institute of Technology (IIT) Indore : HYDRO-CARES LAB </h3>


        </div>
      
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0 mrgin">
          <h5 class="text-uppercase mb-4">IIT INDORE : HYDRO-CARES LAB</h5>

          <ul class="list-unstyled">
            <li class="mb-2">
              <a href="/aboutus" class="text-white"><i class="fas fa-paw pe-3"></i>About us</a>
            </li>
            <li class="mb-2">
              <a href="/aboutus" class="text-white"><i class="fas fa-paw pe-3"></i>Contact us</a>
            </li>
            <li class="mb-2">
              <a href="/aboutus" class="text-white"><i class="fas fa-paw pe-3"></i>Disclaimer</a>
            </li>
          </ul>
        </div>
       
        {/* <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase mb-4">Animals</h5>

          <ul class="list-unstyled">
            <li class="mb-2">
              <a href="#!" class="text-white"><i class="fas fa-paw pe-3"></i>General information</a>
            </li>
            <li class="mb-2">
              <a href="#!" class="text-white"><i class="fas fa-paw pe-3"></i>About the shelter</a>
            </li>
            <li class="mb-2">
              <a href="#!" class="text-white"><i class="fas fa-paw pe-3"></i>Statistic data</a>
            </li>
            <li class="mb-2">
              <a href="#!" class="text-white"><i class="fas fa-paw pe-3"></i>Job</a>
            </li>
            <li class="mb-2">
              <a href="#!" class="text-white"><i class="fas fa-paw pe-3"></i>Tenders</a>
            </li>
            <li class="mb-2">
              <a href="#!" class="text-white"><i class="fas fa-paw pe-3"></i>Contact</a>
            </li>
          </ul>
        </div>
        */}
        {/* <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase mb-4">Contact</h5>

          <ul class="list-unstyled">
            <li>
              <p><i class="fas fa-map-marker-alt pe-2"></i>Warsaw, 57 Street, Poland</p>
            </li>
            <li>
              <p><i class="fas fa-phone pe-2"></i>+ 01 234 567 89</p>
            </li>
            <li>
              <p><i class="fas fa-envelope pe-2 mb-0"></i>contact@example.com</p>
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  
    <div class="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
      © 2024 Copyright:
      <a class="text-white" href="https://www.iiti.ac.in/"> @ Pranav Kalwaghe</a>
    </div>
  </footer>

</div>

  );
}
