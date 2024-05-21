import React from 'react';
import './AboutUsPage.css'; // Import your CSS file
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/Footer";

import cardImage1 from '../aboutus/VijayJain.png'; // Import your card images
import cardImage2 from '../aboutus/ManishKumarGoyal.png'; // Import your card images
import cardImage3 from '../aboutus/Pralhad.jpg'; // Import your card images
import cardImage4 from '../aboutus/Pranav.jpeg'; // Import your card images


const AboutUsPage = () => {
  return (
    <>
      <Navbar />
      <div className="about-us-container">
        <div className="about-us-content">
          <h1 className="about-us-title">About Us</h1>

          <div className="card-container">
            {/* Card 1 */}
            <div className="card">
              <img src={cardImage2} alt="Card 1" className="card-image" />
              <div className="card-content">
                <h3 style={{ fontWeight: "bold" }}>Manish Kumar Goyal,</h3> <h6>Ph.D.</h6>
                <p className="card-description">Professor and Dean of Infrastructure Development</p>
                <p className="card-description">Department of Civil Engineering, IIT Indore, Indore- 453552, India</p>
                <p className="card-description">mkgoyal@iiti.ac.in</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="card">
              <img src={cardImage1} style={{ height: "59%" }} alt="Card 1" className="card-image" />
              <div className="card-content">
                <h3 style={{ fontWeight: "bold" }}>Mr. Vijay Jain</h3>
                <p className="card-description">PMRF- Research Scholar, Civil Engineering, IIT Indore</p>
                <p className="card-description">Phd2101104008@iiti.ac.in</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="card">
              <img src={cardImage3} style={{ height: "59%" }} alt="Card 1" className="card-image" />
              <div className="card-content">
                <h3 style={{ fontWeight: "bold" }}>Mr. Pralhad Pawar</h3>
                <p className="card-description">B.Tech Student, , Civil Engineering, IIT Indore</p>
                <p className="card-description">ce200004038@iiti.ac.in</p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="card">
              <img src={cardImage4} style={{ height: "59%" }} alt="Card 1" className="card-image" />
              <div className="card-content">
                <h3 style={{ fontWeight: "bold" }}>Mr. Pranav Kalwaghe</h3>
                <p className="card-description">B.Tech Student, , Computer Science and Engineering, IIT Indore</p>
                <p className="card-description">cse220001035@iiti.ac.in</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mission-container">
            <h2 className="mission-title"> Acknowledgment</h2>
            <p className="mission-description">

              We would like to appreciate financial assistance from the PMRF, Indian Ministry of Human Resource Development (MHRD). Datasets used in this study were obtained from the India Meteorological Department (IMD) and The Modern-Era Retrospective Analysis for Research and Applications, Version 2 (MERRA-2) satellite.

              Lab Name: HYDRO-CARES Lab
            </p>
          </div>
          <div className="mission-container">
            <h3 className="mission-title"> Disclaimer</h3>
            <p className="mission-description">

            The work presented on this web page is part of the investigative effort at the Indian Institute of Technology Indore, and can't be considered as official creation of any institute or regional agency.

             
            </p>
            <h3 className="mission-description">

            USE DATA AT YOUR OWN RISK

 
</h3>
<p className="mission-description">

Data from this site is solely for academic and educational use, not for operational or commercial purposes. The data is provided "as is" without any guarantees or warranties. Providers are not liable for any damages, including lost data, lost profits, or recovery costs, nor for any special, incidental, or consequential damages resulting from the use of the data. The accuracy and reliability of the data are not warranted, and all liabilities related to its quality, performance, and fitness for a particular purpose are expressly disclaimed.
</p>

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUsPage;