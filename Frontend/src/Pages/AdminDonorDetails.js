import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AdminNavbar from "../Components/AdminNavbar";
import Footer3 from "../Components/Footer3";
import "./AdminDonorDetails.css";
import "./Login.css";

function AdminDonorDetails({ setApprovedDonors }) {
  const [data, setData] = useState([]);

  const [disabledDonors, setDisabledDonors] = useState(() => {
    const storedDisabledDonors = localStorage.getItem("disabledDonors");
    return storedDisabledDonors ? JSON.parse(storedDisabledDonors) : [];
  });

  const approveDonor = async (donorId) => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:5000/approve/${donorId}`
      );
      if (response.status === 200) {
        alert("Donor approved successfully");

        setDisabledDonors([...disabledDonors, donorId]);
        localStorage.setItem(
          "disabledDonors",
          JSON.stringify([...disabledDonors, donorId])
        );
      } else {
        alert("Failed to approve donor");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to approve donor");
    }
  };

  const rejectDonor = async (donorId) => {
    try {
      const response = await axios.delete(
        `http://127.0.0.1:5000/deleteDonor/${donorId}`
      );
      if (response.status === 200) {
        alert("Donor rejected successfully");
      } else {
        alert("Failed to reject donor");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to reject donor");
    }
  };

  const getDonorData = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:5000/getsDonor");
      console.log(res);
      if (res.data && res.data.donors) {
        setData(res.data.donors);
      } else {
        console.error("Data or donors array is undefined:", res);
      }
    } catch (error) {
      console.error("Error fetching donor data:", error);
    }
  };

  useEffect(() => {
    getDonorData();
  }, []);

  return (
    <>
      <div className="xyz">
        <AdminNavbar />
        <div className="container">
          <div className="card text-center mt-5">
            <div className="card-header bg-primary">
              <h2>Donor Details</h2>
            </div>
            <div className="card-body">
              <table className="table table-striped">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Age</th>
                    <th scope="col">Blood Group</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Address</th>
                    <th scope="col">Email</th>
                    <th scope="col">Contact Number</th>
                    <th scope="col">Organ to Donate</th>
                    <th scope="col">Is Donor Alive or Dead</th>
                    <th scope="col">Death Certificate</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data &&
                    data.map((item) => (
                      <tr key={item.id}>
                        <th scope="row">{item.name}</th>
                        <td>{item.age}</td>
                        <td>{item.bloodGroup}</td>
                        <td>{item.gender}</td>
                        <td>{item.address}</td>
                        <td>{item.email}</td>
                        <td>{item.contactNumber}</td>
                        <td>{item.organToDonate}</td>
                        <td>{item.donor_alive}</td>
                        <td>
                          {item.donor_alive === "dead" && item.death && (
                            <button
                              className="btn btn-sm btn-primary"
                              onClick={() => window.open(item.death, "_blank")}
                            >
                              View
                            </button>
                          )}
                          {item.donor_alive !== "dead" && (
                            <button
                              className="btn btn-sm btn-secondary"
                              disabled
                            >
                              N/A
                            </button>
                          )}
                        </td>
                        <td>
                          <button
                            className="btn btn-success py-1 px-1"
                            onClick={() => approveDonor(item.id)}
                          >
                            Approve
                          </button>
                        </td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-danger"
                            onClick={() => rejectDonor(item.id)}
                          >
                            Reject
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="footer1">
          <Footer3 />
        </div>
      </div>
    </>
  );
}

export default AdminDonorDetails;
