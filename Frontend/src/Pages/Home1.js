import Navbar1 from "../Components/Navbar1";
import './Admindashboard.css'
import AdminNavbar from '../Components/AdminNavbar'
import { useState } from "react";
import './Login.css'
import {useNavigate } from "react-router-dom";
import Footer3 from '../Components/Footer3'
import Navbar3 from '../Components/Navbar3'
import './Admin.css'
import { useContext } from 'react';
import UserContext from '../Components/UserContext';
function Home1()
{
    const { username2 } = useContext(UserContext);

    

    return(
        <>
        <div className="xyz">
        <Navbar3 data={username2}/>
        <h2 style={{textAlign : 'center',marginTop :'5px'}}>Welcome {username2} to We Donate's Website</h2>
        




        <div className="footer1"> <Footer3/></div>
</div>



        
        </>
    );
}export default Home1;