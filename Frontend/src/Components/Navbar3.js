import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import './navbar.css'
import { useContext } from 'react';
import UserContext from '../Components/UserContext';

function Navbar3(props) {
  const navigate = useNavigate();
  const { username1 } = useContext(UserContext);

  

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary stickyy">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/"><span className="text-primary"><h2>We Donate</h2></span></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/Home1" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/DonorReg" className="nav-link">Donor</Link>
            </li>
            <li className="nav-item">
              <Link to="/PatientDashboard" className="nav-link">Patient</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                For Hospital
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link to="/PatientReg" className="dropdown-item">Registration as patient</Link></li>
                <li><Link to="/DonorReg" className="dropdown-item">Registration as Donor</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/A_Login" className="nav-link">Logout</Link>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link rounded-circle bg-primary text-center" style={{ borderRadius: '100px' }}><FontAwesomeIcon icon={faUser} /></Link>
              {props.data}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar3;
