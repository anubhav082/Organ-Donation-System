// import Navbar1 from "../Components/Navbar1";
// import Footer3 from '../Components/Footer3';
// import './DonorReg.css';
// import formphoto from '../3.jpg';
// import { useState } from "react";
// import AdminNavbar from "../Components/AdminNavbar";
// function Adminupdate() {
//     const [username, setusername] = useState("");
//     const [password, setpassword] = useState("");
//     const [password1, setpassword1] = useState("");
//     const Save1 = () => {
//         if (username.length == 0) {
//             alert("Usename cannot be empty");
//             return false;
//         }
//         else if (password.length == 0) {
//             alert("password cannot be empty");
//             return false;
//         }
//         if (password != password1) {

//             alert("Reenterd password not similar to previous password");
//             return false;
//         }
//     }
//     let styleh2 = {

//     }

//     return (
//         <>
//             <div className="xyz">
//                 <AdminNavbar />
//                 <h2 style={{ textAlign: 'center', marginTop: '5px' }}>Update Donor - recipient Information</h2>
//                 <div className="container-fluid wholeformcomp " style={{ maxWidth: '100%', display: 'flex' }}>
//                     <div style={{ flex: 1 }}>
//                         <img src={formphoto} alt="Your Image" style={{ maxWidth: '100%', height: '100%' }} />
//                     </div>


//                     <div className="container formbdy fadmin p-3 rounded" style={{ maxWidth: '50%', flex: 1 }}>
//                         <div className="panel rounded-top">
//                             <div className="panel-heading p-1 bg-primary text-black text-center rounded-top panelheading">
//                                 <h5><b>Donor - recipient form</b></h5>
//                             </div>
//                         </div>
//                         <form className="mx-auto actualform p-2 rounded-bottom" >
//                             <div className="form-group row mb-1">
//                                 <label htmlFor="name" className="col-sm-3 col-form-label">Patient Name:</label>
//                                 <div className="col-sm-9">
//                                     <input type="email" className="form-control" id="name" placeholder="Enter patient email" />
//                                 </div>
//                             </div>
//                             <div className="form-group row mb-1">
//                                 <label htmlFor="name" className="col-sm-3 col-form-label">Donor Name:</label>
//                                 <div className="col-sm-9">
//                                     <input type="email" className="form-control" id="name" placeholder="Enter patient email" />
//                                 </div>
//                             </div>
//                             <div className="form-group row mb-1">
//                                 <label htmlFor="name" className="col-sm-3 col-form-label">Patient Email:</label>
//                                 <div className="col-sm-9">
//                                     <input type="email" className="form-control" id="name" placeholder="Enter patient email" />
//                                 </div>
//                             </div>
//                             <div className="form-group row mb-1">
//                                 <label htmlFor="name" className="col-sm-3 col-form-label">Donor Email:</label>
//                                 <div className="col-sm-9">
//                                     <input type="email" className="form-control" id="name" placeholder="Enter patient email" />
//                                 </div>
//                             </div>




//                             <div className="form-group row">
//                                 <label htmlFor="contactNumber" className="col-sm-3 col-form-label">Patient Contact Number:</label>
//                                 <div className="col-sm-9">
//                                     <input type="tel" className="form-control" id="contactNumber" placeholder="Enter your contact number" />
//                                 </div>
//                             </div>
//                             <div className="form-group row">
//                                 <label htmlFor="contactNumber" className="col-sm-3 col-form-label">Donor Contact Number:</label>
//                                 <div className="col-sm-9">
//                                     <input type="tel" className="form-control" id="contactNumber" placeholder="Enter your contact number" />
//                                 </div>
//                             </div>

//                             <div className="form-group row">
//                                 <label htmlFor="bloodGroup" className="col-sm-3 col-form-label">Blood Group:</label>
//                                 <div className="col-sm-9">
//                                     <select className="form-control" id="bloodGroup">
//                                         <option>A+</option>
//                                         <option>B+</option>
//                                         <option>AB+</option>
//                                         <option>O+</option>
//                                         <option>A-</option>
//                                         <option>B-</option>
//                                         <option>AB-</option>
//                                         <option>O-</option>
//                                     </select>
//                                 </div>
//                             </div>
//                             <div className="form-group row">
//                                 <label htmlFor="organ" className="col-sm-3 col-form-label">Organ to Donate:</label>
//                                 <div className="col-sm-9">
//                                     <select className="form-control" id="organ">
//                                         <option>Heart</option>
//                                         <option>Liver</option>
//                                         <option>Kidney</option>
//                                         <option>Lung</option>
//                                         {/* Add more options as needed */}
//                                     </select>
//                                 </div>
//                             </div>





//                             <div className="form-group row">
//                                 <div className="col-sm-12 text-center mt-3">
//                                     <button type="submit" className="btn btn-primary" onClick={Save1}>Update</button>
//                                 </div>
//                             </div>


//                         </form>
//                     </div>

//                 </div>



//                 <div className="footer" style={{ marginTop: '10px' }}> <Footer3 /></div>
//                 {/* <Footer3/> */}
//             </div>




//         </>
//     );
// } export default Adminupdate;

import React, { useEffect, useState } from "react";
import Navbar1 from "../Components/Navbar1";
import Footer3 from '../Components/Footer3';
import './DonorReg.css';
import formphoto from '../3.jpg';
import AdminNavbar from "../Components/AdminNavbar";
import axios from "axios";
import { useParams } from "react-router-dom";

function Adminupdate({ match }) {
    const params = useParams();
    const [recipient, setRecipient] = useState({
        id: "",
        P_name: "",
        D_name: "",
        P_email: "",
        D_email: "",
        P_mobile: "",
        D_mobile: "",
        Blood_Group: "",
        Organ: ""
    });

    useEffect(() => {
        const fetchRecipient = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:5000/getRecipientDonorById/${params.id}`);
                const data = response.data.recipient;
                setRecipient(data);
            } catch (error) {
                console.error("Error:", error);
            }
        };

        fetchRecipient();
    }, [params.id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRecipient({ ...recipient, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.put(`http://127.0.0.1:5000/updateDonorPatient/${params.id}`, recipient);
            alert("Record updated successfully");
        } catch (error) {
            console.error("Error:", error);
            alert("Error updating record");
        }
    };


    return (
        <>
            <div className="xyz">
                <AdminNavbar />
                <h2 style={{ textAlign: 'center', marginTop: '5px' }}>Update Donor - Recipient Information</h2>
                <div className="container-fluid wholeformcomp" style={{ maxWidth: '100%', display: 'flex' }}>
                    <div style={{ flex: 1 }}>
                        <img src={formphoto} alt="Your Image" style={{ maxWidth: '100%', height: '100%' }} />
                    </div>
                    <div className="container formbdy fadmin p-3 rounded" style={{ maxWidth: '50%', flex: 1 }}>
                        <div className="panel rounded-top">
                            <div className="panel-heading p-1 bg-primary text-black text-center rounded-top panelheading">
                                <h5><b>Donor - Recipient Form</b></h5>
                            </div>
                        </div>
                        <form className="mx-auto actualform p-2 rounded-bottom" onSubmit={handleSubmit}>
                            <div className="form-group row mb-1">
                                <label htmlFor="P_name" className="col-sm-3 col-form-label">Patient Name:</label>
                                <div className="col-sm-9">
                                    <input type="text" className="form-control" id="P_name" name="P_name" value={recipient.P_name} onChange={handleChange} />
                                </div>
                            </div>
                            <div className="form-group row mb-1">
                                <label htmlFor="D_name" className="col-sm-3 col-form-label">Donor Name:</label>
                                <div className="col-sm-9">
                                    <input type="text" className="form-control" id="D_name" name="D_name" value={recipient.D_name} onChange={handleChange} />
                                </div>
                            </div>
                            <div className="form-group row mb-1">
                                <label htmlFor="P_email" className="col-sm-3 col-form-label">Patient Email:</label>
                                <div className="col-sm-9">
                                    <input type="email" className="form-control" id="P_email" name="P_email" value={recipient.P_email} onChange={handleChange} />
                                </div>
                            </div>
                            <div className="form-group row mb-1">
                                <label htmlFor="D_email" className="col-sm-3 col-form-label">Donor Email:</label>
                                <div className="col-sm-9">
                                    <input type="email" className="form-control" id="D_email" name="D_email" value={recipient.D_email} onChange={handleChange} />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="P_mobile" className="col-sm-3 col-form-label">Patient Contact Number:</label>
                                <div className="col-sm-9">
                                    <input type="tel" className="form-control" id="P_mobile" name="P_mobile" value={recipient.P_mobile} onChange={handleChange} />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="D_mobile" className="col-sm-3 col-form-label">Donor Contact Number:</label>
                                <div className="col-sm-9">
                                    <input type="tel" className="form-control" id="D_mobile" name="D_mobile" value={recipient.D_mobile} onChange={handleChange} />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="Blood_Group" className="col-sm-3 col-form-label">Blood Group:</label>
                                <div className="col-sm-9">
                                    <select className="form-control" id="Blood_Group" name="Blood_Group" value={recipient.Blood_Group} onChange={handleChange}>
                                        <option>A+</option>
                                        <option>B+</option>
                                        <option>AB+</option>
                                        <option>O+</option>
                                        <option>A-</option>
                                        <option>B-</option>
                                        <option>AB-</option>
                                        <option>O-</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="Organ" className="col-sm-3 col-form-label">Organ to Donate:</label>
                                <div className="col-sm-9">
                                    <select className="form-control" id="Organ" name="Organ" value={recipient.Organ} onChange={handleChange}>
                                        <option>Heart</option>
                                        <option>Liver</option>
                                        <option>Kidney</option>
                                        <option>Lung</option>
                                        {/* Add more options as needed */}
                                    </select>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-sm-12 text-center mt-3">
                                    <button type="submit" className="btn btn-primary">Update</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="footer" style={{ marginTop: '10px' }}> <Footer3 /></div>
            </div>
        </>
    );
}

export default Adminupdate;
