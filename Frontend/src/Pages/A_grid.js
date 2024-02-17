import React from 'react';
import { Link } from 'react-router-dom';
import './A_grid.css'; // Import custom CSS for styling
import Navbar1 from '../Components/Navbar1';
import Footer3 from '../Components/Footer3'

function A_grid() {
  return (
    <>
    <div className='bodygrid'>

    
    <Navbar1/>
    <div className="title-container1 container pt-5 mt-5">
        
      <h1 className="title">Welcome to the Organ Donation System</h1>
      
      <div className="section">
        <Link className="card donor" to="/donor">
          <h2 className="section-title">Donor</h2>
        </Link>
        <Link className="card patient" to="/patient">
          <h2 className="section-title">Patient</h2>
        </Link>
        <Link className="card hospital" to="/hospital">
          <h2 className="section-title">Hospital</h2>
        </Link>
        {/* <Link className="card admin" to="/admin">
          <h2 className="section-title">Admin</h2>
        </Link> */}
      </div>
      
    </div>
    </div>
    <div className="footer1"> <Footer3/></div>
    </>
    
  );
}

export default A_grid;