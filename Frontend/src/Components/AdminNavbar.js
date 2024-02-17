import { Link } from "react-router-dom";

function AdminNavbar() {
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
              <Link to="/Admindashboard" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/AdminDonorDetails" className="nav-link">Donor Details</Link>
            </li>
            <li className="nav-item">
              <Link to="/AdminPatientDetails" className="nav-link">Patient Details</Link>
            </li>
            <li className="nav-item">
              <Link to="/AdminDonorPatientDetails" className="nav-link">Donor-Patient</Link>
            </li>
            <li className="nav-item">
              <Link to="/Home" className="nav-link">Log Out</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default AdminNavbar;
