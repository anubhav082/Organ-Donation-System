import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faUser} from '@fortawesome/free-solid-svg-icons'
import './navbar.css'

function Navbar2() {


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
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/A_Login" className="nav-link">Login</Link>
            </li>
            <li className="nav-item">
              <Link to="/A_adminLogin" className="nav-link">Admin</Link>
            </li>
            <li className="nav-item">
              <Link to="/Aboutus1" className="nav-link">About Us</Link>
            </li>
            <li className="nav-item">
              <Link to="/Contactus" className="nav-link">Contact Us</Link>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link rounded-circle bg-primary" style={{ borderRadius: '100px' }}><FontAwesomeIcon icon={faUser} /></Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar2;
