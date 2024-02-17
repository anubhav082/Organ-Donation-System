import Navbar1 from "../Components/Navbar1";
import axios from "axios";
import './Admindashboard.css';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminNavbar from '../Components/AdminNavbar';
import Footer3 from '../Components/Footer3';
import './AdminDonorDetails.css';
import './Login.css';

function AdminPatientDetails() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const getPatientData = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:5000/getRecipient");
      setData(res.data.recipients);
    } catch (error) {
      console.error("Error fetching patient data:", error);
    }
  }

  useEffect(() => {
    getPatientData();
  }, []);

  const handleReject = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:5000/deleteRecipient/${id}`);
      // Update the state to reflect the deletion
      setData(data.filter(item => item.id !== id));
      alert("Patient record deleted successfully");

    } catch (error) {
      console.error("Error deleting recipient:", error);
    }
  };

  return (
    <>
      <AdminNavbar style={{ position: 'fixed', top: 0, width: '100%', zIndex: 999 }} />
      <div className="xyz">
        <div className="container">
          <div class="card text-center mt-5">
            <div class="card-header bg-primary">
              <h2>Patient Details</h2>
            </div>
            <div class="card-body" >
              <table class="table table-striped">
                <thead class="thead-dark">
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Age</th>
                    <th scope="col">Blood Group</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Address</th>
                    <th scope="col">Email</th>
                    <th scope="col">Contact Number</th>
                    <th scope="col">Needed Organ</th>
                    <th scope="col">Time Required</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    data.map((item) => (
                      <tr key={item.id}>
                        <th scope="row">{item.name}</th>
                        <td>{item.age}</td>
                        <td>{item.blood_group}</td>
                        <td>{item.gender}</td>
                        <td>{item.address}</td>
                        <td>{item.email}</td>
                        <td>{item.contact_number}</td>
                        <td>{item.needed_organ}</td>
                        <td>{item.time_required}</td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-danger"
                            onClick={() => handleReject(item.id)}
                          >
                            Reject
                          </button>
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="footer1"> <Footer3 /></div>
      </div>
    </>
  );
}

export default AdminPatientDetails;
