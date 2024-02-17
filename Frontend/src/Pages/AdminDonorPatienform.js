import Navbar1 from "../Components/Navbar1";
import Footer3 from '../Components/Footer3';
import './DonorReg.css';
import formphoto from '../3.jpg';
import { useState, useEffect } from "react";
import axios from "axios";
import AdminNavbar from "../Components/AdminNavbar";
function AdminDonorPatienform() {
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [password1, setpassword1] = useState("");
    const [recipientDonorData, setRecipientDonorData] = useState({});

    useEffect(() => {
        fetchRecipientDonorData();
    }, []);

    const fetchRecipientDonorData = async () => {
        try {
            const response = await fetch("http://localhost:5000/insertfetchRecipientDonor");
            if (!response.ok) {
                throw new Error("Failed to fetch recipient-donor data");
            }
            const data = await response.json();
            console.log(data.recipients[0]);
            setRecipientDonorData(data.recipients[0] || {}); // Handle case where data.recipients is empty
        } catch (error) {
            console.error(error);
        }
    }
    const Save1 = async (e) => {
        e.preventDefault();

        // if (username.length == 0) {
        //     alert("Usename cannot be empty");
        //     return false;
        // }
        // else if (password.length == 0) {
        //     alert("password cannot be empty");
        //     return false;
        // }
        // if (password != password1) {

        //     alert("Reenterd password not similar to previous password");
        //     return false;
        // }
        let res = await axios.post("http://127.0.0.1:5000/insertDonorPatient", {
            P_name: recipientDonorData.P_name,
            D_name: recipientDonorData.D_name,
            P_email: recipientDonorData.P_email,
            D_email: recipientDonorData.D_email,
            P_mobile: recipientDonorData.P_mobile,
            D_mobile: recipientDonorData.D_mobile,
            Blood_Group: recipientDonorData.Blood_Group,
            Organ: recipientDonorData.Organ


        })
        // console.log("resp aa gya h")
        if (res.status === 200) {
            alert('Successfully added');
        }
        else {
            alert("not added successfully");
        }
    }
    let styleh2 = {

    }

    return (
        <>
            <div className="xyz">
                <AdminNavbar />
                <h2 style={{ textAlign: 'center', marginTop: '5px' }}>Donor - recipient Information</h2>
                <div className="container-fluid wholeformcomp " style={{ maxWidth: '100%', display: 'flex' }}>
                    <div style={{ flex: 1 }}>
                        <img src={formphoto} alt="Your Image" style={{ maxWidth: '100%', height: '100%' }} />
                    </div>


                    <div className="container formbdy fadmin p-3 rounded" style={{ maxWidth: '50%', flex: 1 }}>
                        <div className="panel rounded-top">
                            <div className="panel-heading p-1 bg-primary text-black text-center rounded-top panelheading">
                                <h5><b>Donor - recipient form</b></h5>
                            </div>
                        </div>
                        {Object.keys(recipientDonorData).length > 0 && (
                            <form className="mx-auto actualform p-2 rounded-bottom">
                                <div className="form-group row mb-1">
                                    <label htmlFor="patientName" className="col-sm-3 col-form-label">Patient Name:</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control" id="patientName" placeholder="Enter patient name" value={recipientDonorData.P_name || ''} onChange={(e) => setRecipientDonorData({ ...recipientDonorData, P_name: e.target.value })} />
                                    </div>
                                </div>
                                <div className="form-group row mb-1">
                                    <label htmlFor="donorName" className="col-sm-3 col-form-label">Donor Name:</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control" id="donorName" placeholder="Enter donor name" value={recipientDonorData.D_name || ''} onChange={(e) => setRecipientDonorData({ ...recipientDonorData, D_name: e.target.value })} />
                                    </div>
                                </div>
                                <div className="form-group row mb-1">
                                    <label htmlFor="patientEmail" className="col-sm-3 col-form-label">Patient Email:</label>
                                    <div className="col-sm-9">
                                        <input type="email" className="form-control" id="patientEmail" placeholder="Enter patient email" value={recipientDonorData.P_email || ''} onChange={(e) => setRecipientDonorData({ ...recipientDonorData, P_email: e.target.value })} />
                                    </div>
                                </div>
                                <div className="form-group row mb-1">
                                    <label htmlFor="donorEmail" className="col-sm-3 col-form-label">Donor Email:</label>
                                    <div className="col-sm-9">
                                        <input type="email" className="form-control" id="donorEmail" placeholder="Enter donor email" value={recipientDonorData.D_email || ''} onChange={(e) => setRecipientDonorData({ ...recipientDonorData, D_email: e.target.value })} />
                                    </div>
                                </div>
                                <div className="form-group row mb-1">
                                    <label htmlFor="patientContact" className="col-sm-3 col-form-label">Patient Contact Number:</label>
                                    <div className="col-sm-9">
                                        <input type="tel" className="form-control" id="patientContact" placeholder="Enter patient contact number" value={recipientDonorData.P_mobile || ''} onChange={(e) => setRecipientDonorData({ ...recipientDonorData, P_mobile: e.target.value })} />
                                    </div>
                                </div>
                                <div className="form-group row mb-1">
                                    <label htmlFor="donorContact" className="col-sm-3 col-form-label">Donor Contact Number:</label>
                                    <div className="col-sm-9">
                                        <input type="tel" className="form-control" id="donorContact" placeholder="Enter donor contact number" value={recipientDonorData.D_mobile || ''} onChange={(e) => setRecipientDonorData({ ...recipientDonorData, D_mobile: e.target.value })} />
                                    </div>
                                </div>
                                <div className="form-group row mb-1">
                                    <label htmlFor="bloodGroup" className="col-sm-3 col-form-label">Blood Group:</label>
                                    <div className="col-sm-9">
                                        <select className="form-control" id="bloodGroup" value={recipientDonorData.Blood_Group || ''} onChange={(e) => setRecipientDonorData({ ...recipientDonorData, Blood_Group: e.target.value })}>
                                            <option defaultValue={recipientDonorData.Blood_Group || ''}>{recipientDonorData.Blood_Group || ''}</option>
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
                                <div className="form-group row mb-1">
                                    <label htmlFor="organ" className="col-sm-3 col-form-label">Organ to Donate:</label>
                                    <div className="col-sm-9">
                                        <select className="form-control" id="organ" value={recipientDonorData.Organ || ''} onChange={(e) => setRecipientDonorData({ ...recipientDonorData, Organ: e.target.value })}>
                                            <option defaultValue={recipientDonorData.Organ || ''}>{recipientDonorData.Organ || ''}</option>
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
                                        <button type="submit" className="btn btn-primary" onClick={Save1}>Submit</button>
                                    </div>
                                </div>
                            </form>

                        )}
                    </div>

                </div>



                <div className="footer" style={{ marginTop: '10px' }}> <Footer3 /></div>
                {/* <Footer3/> */}
            </div>




        </>
    );
} export default AdminDonorPatienform;