// import Navbar1 from "../Components/Navbar1";
// import './Admindashboard.css'

// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import AdminNavbar from '../Components/AdminNavbar'
// import Footer3 from '../Components/Footer3'
// import './AdminDonorDetails.css'
// import './Login.css'
// import './Admin.css'
// import axios from "axios";
// import { Link } from "react-router-dom";
// function AdminDonorPatientDetails() {

//   const [data, setData] = useState([]);
//   const getDonorPatientData = async () => {
//     let res = await axios.get("http://127.0.0.1:5000/getRecipientDonor");
//     console.log(res);
//     setData(res.data.recipients);

//   }
//   useEffect(() => {
//     getDonorPatientData()
//   }, [])

//   const Deleterec = async (Id) => {
//     try {
//       const response = await axios.delete(
//         `http://127.0.0.1:5000/deleteDonorPatient/${Id}`
//       );
//       if (response.status === 200) {
//         alert(" record deleted successfully");
//         // Refresh donor list or update UI as needed
//       } else {
//         alert("Failed to delete record");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       alert("Failed to reject donor");
//     }
//   };
//   console.log(data);

//   return (
//     <>
//       <AdminNavbar />
//       <div className="xyz">

//         <div className="container">

//           {/* <h2 style={{textAlign : 'center',marginTop :'5px'}}>Donor - Patient Details</h2> */}

//           <div class="card text-center mt-5">
//             <div class="card-header bg-primary">
//               {/* <ul class="nav nav-pills card-header-pills">
//       <li class="nav-item">
//         <a class="nav-link active" href="#info1">Active</a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link" href="">Link</a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link disabled" href="#">Disabled</a>
//       </li>
//     </ul> */}
//               <h2>Donor Patient Details</h2>
//             </div>
//             <div class="card-body" >
//               <div className="addbutton" style={{ textAlign: "center" }}>
//                 <button class="btn btn-primary py-2 px-3" style={{ marginTop: "10px" }} ><Link to="/AdminDonorPatienform" className="ml-2 text-decoration-none text-white">Insert</Link></button>
//               </div>
//               <table class="table table-striped mt-5">
//                 <thead class="thead-dark">
//                   <tr>
//                     {/* <th scope="col">S.No</th> */}
//                     <th scope="col">Patient Name</th>
//                     <th scope="col">Donor Name</th>
//                     <th scope="col">Patient email</th>
//                     <th scope="col">Donor Email</th>
//                     <th scope="col">Patient Contact</th>
//                     <th scope="col">Donor Contact</th>
//                     <th scope="col">Blood Group</th>
//                     <th scope="col">Matched Organ</th>
//                     <th scope="col">Edit</th>
//                     <th scope="col">Delete</th>
//                   </tr>
//                 </thead>
//                 <tbody>

//                   {data &&
//                     data.map((item) => (
//                       <tr key={item.id}>
//                         <th scope="row">{item.P_name}</th>
//                         <td>{item.D_name}</td>
//                         <td>{item.P_email}</td>
//                         <td>{item.D_email}</td>
//                         <td>{item.P_mobile}</td>
//                         <td>{item.D_mobile}</td>
//                         <td>{item.Blood_Group}</td>
//                         <td>{item.Organ}</td>

//                         <td>
//                           {/* <button class="btn btn-primary  py-1 px-1" ><Link to="/Adminupdate" className="ml-2 text-decoration-none text-white">Edit</Link></button> */}
//                           <button class="btn btn-primary  py-1 px-1">
//                             <Link
//                               to={`/Adminupdate/${item.id}`} // Navigate to the edit form with record ID
//                               className="ml-2 text-decoration-none text-white"
//                             >
//                               Edit
//                             </Link>
//                           </button>
//                         </td>
//                         <td>
//                           <button class="btn btn-primary  py-1 px-1" onClick={() => Deleterec(item.id)}>Delete</button>

//                         </td>
//                       </tr>
//                     ))}

//                 </tbody>
//               </table>
//               {/* <h5 class="card-title">Special title treatment</h5>
//     <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a> */}
//             </div>
//           </div>

//           {/* <div className="addbutton" style={{textAlign : "center"}}>
//     <button class="btn btn-primary  py-2 px-3"  style={{marginTop: "20px"}}>Insert</button>

//     </div>
//         <table class="table table-striped mt-5">
//   <thead class="thead-dark">
//     <tr>
//     <th scope="col">ID</th>
//       <th scope="col">Patient Aadhar Number</th>
//       <th scope="col">Patient Name</th>
//       <th scope="col">Patient Email</th>
//       <th scope="col">Patient Contact</th>
//       <th scope="col">Donor Aadhar Number</th>
//       <th scope="col">Donor Name</th>
//       <th scope="col">Donor Email</th>
//       <th scope="col">Donor Contact</th>
//       <th scope="col">Date Of Assignment</th>
//       <th scope="col">Edit</th>
//       <th scope="col">Delete</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <th scope="row">xyz</th>
//       <td>xyz</td>
//       <td>xyz+</td>
//       <td>xyz</td>
//       <td>xyz</td>
//       <td>xyz</td>
//       <td>xyz</td>
//       <td>xyz</td>
//       <td>xyz</td>
//       <td>xyz</td>
//       <td><button class="btn btn-primary rounded-pill py-1 px-1" >Edit</button></td>
//       <td><button class="btn btn-primary rounded-pill py-1 px-1" >Delete</button></td>
//     </tr>

//   </tbody>
// </table> */}
//         </div>

//         <div className="footer1"> <Footer3 /></div>

//       </div>

//     </>
//   );
// } export default AdminDonorPatientDetails;

import Navbar1 from "../Components/Navbar1";
import "./Admindashboard.css";

import { useState, useEffect } from "react";
import AdminNavbar from "../Components/AdminNavbar";
import Footer3 from "../Components/Footer3";
import "./AdminDonorDetails.css";
import "./Login.css";
import "./Admin.css";
import axios from "axios";
import { Link } from "react-router-dom";

function AdminDonorPatientDetails() {
  const [data, setData] = useState([]);

  const getDonorPatientData = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:5000/getRecipientDonor");
      setData(res.data.recipients);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getDonorPatientData();
  }, []);

  const deleteRecord = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:5000/deleteDonorPatient/${id}`);
      setData((prevData) => prevData.filter((item) => item.id !== id));
      alert("Record deleted successfully");
    } catch (error) {
      console.error("Error deleting record:", error);
      alert("Failed to delete record");
    }
  };

  return (
    <>
      <AdminNavbar />
      <div className="xyz">
        <div className="container">
          <div class="card text-center mt-5">
            <div class="card-header bg-primary">
              <h2>Donor Patient Details</h2>
            </div>
            <div class="card-body">
              <div className="addbutton" style={{ textAlign: "center" }}>
                <button
                  className="btn btn-success py-2 px-3"
                  style={{ marginTop: "10px" }}
                >
                  <Link
                    to="/AdminDonorPatienform"
                    className="ml-2 text-decoration-none text-white"
                  >
                    Insert
                  </Link>
                </button>
              </div>
              <table class="table table-striped mt-5">
                <thead class="thead-dark">
                  <tr>
                    <th scope="col">Patient Name</th>
                    <th scope="col">Donor Name</th>
                    <th scope="col">Patient email</th>
                    <th scope="col">Donor Email</th>
                    <th scope="col">Patient Contact</th>
                    <th scope="col">Donor Contact</th>
                    <th scope="col">Blood Group</th>
                    <th scope="col">Matched Organ</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item) => (
                    <tr key={item.id}>
                      <th scope="row">{item.P_name}</th>
                      <td>{item.D_name}</td>
                      <td>{item.P_email}</td>
                      <td>{item.D_email}</td>
                      <td>{item.P_mobile}</td>
                      <td>{item.D_mobile}</td>
                      <td>{item.Blood_Group}</td>
                      <td>{item.Organ}</td>
                      <td>
                        <button class="btn btn-primary py-1 px-1">
                          <Link
                            to={`/Adminupdate/${item.id}`}
                            className="ml-2 text-decoration-none text-white"
                          >
                            Edit
                          </Link>
                        </button>
                      </td>
                      <td>
                        <button
                          className="btn btn-danger py-1 px-1"
                          onClick={() => deleteRecord(item.id)}
                        >
                          Delete
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

export default AdminDonorPatientDetails;
