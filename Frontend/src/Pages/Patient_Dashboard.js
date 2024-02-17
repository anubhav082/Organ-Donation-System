import Navbar1 from "../Components/Navbar1";
import "./Admindashboard.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminNavbar from "../Components/AdminNavbar";
import { useEffect } from "react";
import axios from "axios";
import Footer3 from "../Components/Footer3";
import { useContext } from 'react';
import UserContext from '../Components/UserContext';
import "./AdminDonorDetails.css";
import "./Login.css";
import { Link } from "react-router-dom/dist";
import Navbar3 from "../Components/Navbar3";

function PatientDashboard() {

  const [approvedDonors, setApprovedDonors] = useState([]);
  const { username2 } = useContext(UserContext);

  useEffect(() => {
    const getApprovedDonors = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:5000/approved-donors");
        setApprovedDonors(res.data.approvedDonors);
      } catch (error) {
        console.error("Error fetching approved donors:", error);
      }
    };

    getApprovedDonors();
  }, []);
  
  return (
    <>
      <div className="xyz">
      <Navbar3 data={username2} />
        <div className="container">
          {/* <h2 style={{textAlign : 'center',marginTop :'5px'}}>Donor Details</h2> */}
          <div class="card text-center mt-5">
            <div class="card-header bg-primary">
              <h2>Approved Donor Details</h2>
            </div>
            <div class="card-body">
              <table className="table table-striped">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Age</th>
                    <th scope="col">Blood Group</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Organ to Donate</th>
                    <th scope="col">Is Donor alive or dead</th>
                  </tr>
                </thead>
                <tbody>
                  {approvedDonors.map((donor) => (
                    <tr key={donor.id}>
                      <td>{donor.name}</td>
                      <td>{donor.age}</td>
                      <td>{donor.blood_group}</td>
                      <td>{donor.gender}</td>
                      <td>{donor.organ_to_donate}</td>
                      <td>{donor.donor_status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="text-center">
                <Link to="/PatientReg" className="btn btn-primary">
                  Register Yourself
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="footer1">
          {" "}
          <Footer3 />
        </div>
      </div>
    </>
  );
}
export default PatientDashboard;
