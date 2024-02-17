import logo from './logo.svg';
import './App.css';
import navbar from './Components/navbar';
import Navbar1 from './Components/Navbar1';

import organdonationimage from './organdonationimage.jpg'
import Footer1 from './Components/Footer1';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import DonorReg from './Pages/DonorReg';
import Home from './Pages/Home';
import AdminLogin1 from './Pages/AdminLogin1'
import PatientReg from './Pages/PatientReg'
import Admindashboard from './Pages/Admindashboard'
import DonorLogin from './Pages/DonorLogin'
import PatientLogin from './Pages/PatientLogin'
import AdminDonorDetails from './Pages/AdminDonorDetails'
import AdminDonorPatientDetails from './Pages/AdminDonorPatientDetails'
import AdminPatientDetails from './Pages/AdminPatientDetails'
import Aboutus from './Pages/Aboutus'
import Aboutus1 from './Pages/Aboutus1';
import Contactus from './Pages/Contactus'
import AdminDonorPatienform from './Pages/AdminDonorPatienform'
import Modal from './Pages/Modal'
import Registrationdemo from './Pages/Registrationdemo'
import Adminupdate from './Pages/Adminupdate'
import Initisal_Register from './Pages/Initisal_Register'
import Initial_login from './Pages/Initial_login'
import afterloginHome from './Pages/afterloginHome'
import afterlogindashboard from './Pages/afterlogindashboard'
import Home1 from './Pages/Home1'
import A_grid from './Pages/A_grid';
import A_Login from './Pages/A_Login'
import A_Register from './Pages/A_Register'
import A_adminLogin from './Pages/A_adminLogin'
import A_forgot_password from './Pages/A_forgot_password'
import PatientDashboard from './Pages/Patient_Dashboard';
import UserContext from './Components/UserContext';
import React, { createContext, useState } from 'react';
import Navbar3 from './Components/Navbar3';
function App() {
  const [username2, setUsername2] = useState('');
  return (
    <>
      <UserContext.Provider value={{ username2: username2, setUsername2: setUsername2 }}>
        <BrowserRouter>
          <Routes>
            <>
            </>

            <Route path="/A_grid" element={<A_grid />}></Route>
            <Route path="/DonorReg" element={<DonorReg />}></Route>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Home" element={<Home />}></Route>
            <Route path="/PatientReg" element={<PatientReg />}></Route>
            <Route path="/AdminLogin1" element={<AdminLogin1 />}></Route>
            <Route path="/Admindashboard" element={<Admindashboard />}></Route>
            <Route path="/DonorLogin" element={<DonorLogin />}></Route>
            <Route path="/PatientLogin" element={<PatientLogin />}></Route>
            <Route path="/AdminDonorDetails" element={<AdminDonorDetails />}></Route>
            <Route path="/AdminDonorPatientDetails" element={<AdminDonorPatientDetails />}></Route>
            <Route path="/AdminPatientDetails" element={<AdminPatientDetails />}></Route>
            <Route path="/Aboutus" element={<Aboutus />}></Route>
            <Route path="/Aboutus1" element={<Aboutus1 />}></Route>
            <Route path="/Contactus" element={<Contactus />}></Route>
            <Route path="/AdminDonorPatienform" element={<AdminDonorPatienform />}></Route>
            <Route path="/Modal" element={<Modal />}></Route>
            <Route path="/Registrationdemo" element={<Registrationdemo />}></Route>
            <Route path="/Adminupdate/:id" element={<Adminupdate />}></Route>
            <Route path="/Home/:user_data" element={<Home />}></Route>
            <Route path="/Initisal_Register" element={<Initisal_Register />}></Route>
            <Route path="/Initial_login" element={<Initial_login />}></Route>
            <Route path="/afterloginHome" element={<afterloginHome />}></Route>
            <Route path="/afterlogindashboard" element={<afterlogindashboard />}></Route>
            <Route path="/Home1" element={<Home1 />}></Route>
            <Route path="/A_grid" element={<A_grid />}></Route>
            <Route path="/A_Login" element={<A_Login />}></Route>
            <Route path="/A_Register" element={<A_Register />}></Route>
            <Route path="/A_adminLogin" element={<A_adminLogin />}></Route>
            <Route path="/A_forgot_password" element={<A_forgot_password />}></Route>
            <Route path="/PatientDashboard" element={<PatientDashboard />}></Route>
            <Route path="/Navbar3" element={<Navbar3 />}></Route>




          </Routes>
        </BrowserRouter>

      </UserContext.Provider>



    </>

  );
}

export default App;
