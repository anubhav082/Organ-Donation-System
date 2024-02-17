import Navbar1 from "../Components/Navbar1";
import './Admindashboard.css'
import { useState } from "react";
import {useNavigate } from "react-router-dom";
import AdminNavbar from '../Components/AdminNavbar'
import Footer3 from '../Components/Footer3'
import './AdminDonorDetails.css'
import './Login.css'
import './Admin.css'
import about from '../about1.jpg'
import homebac from '../4.jpg'

import './DonorReg.css';
import formphoto from '../3.jpg';
import Navbar2 from "../Components/Navbar2";

function Contactus()
{

    
    const Save1 =()=>
    {
        
    }

    return(
        <>
        <div className="xyz">
        <Navbar2/>
        

        <div className="container">
        <div class="section-home1 mt-5 mb-5 text-center ">
    <div class="container">
        <div class="row gx-0 box-shadow">
                <div className=" col-md-6 col-sm-6 p-5 bg-white">
                <img src={about} alt="abc" style={{maxHeight: '100vh', width: '100%'}}/>
                </div>
                <div class="col-md-6 col-sm-6 bg-white bg-gradient" style={{textAlign: 'justify', padding :'60px 30px 20px 0px'}}>
                <div className="container formbdy fadmin p-3 rounded" style={{ maxWidth: '100%'}}>
        <div className="panel rounded-top">
            <div className="panel-heading p-1 bg-primary text-black text-center rounded-top panelheading">
                    <h5><b>Contact Us</b></h5>
            </div>
        </div>
    <form className="mx-auto actualform p-2 rounded-bottom" >
    
        <div className="form-group row mb-1">
            <label htmlFor="name" className="col-sm-3 col-form-label">Name:</label>
            <div className="col-sm-9">
                <input type="text" className="form-control" id="name" placeholder="Enter your name" />
            </div>
        </div>
        <div className="form-group row">
            <label htmlFor="email" className="col-sm-3 col-form-label">Email:</label>
            <div className="col-sm-9">
                <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                {/* You might want to add email validation here */}
            </div>
        </div>
        <div className="form-group row">
            <label htmlFor="contactNumber" className="col-sm-3 col-form-label">Contact Number:</label>
            <div className="col-sm-9">
                <input type="tel" className="form-control" id="contactNumber" placeholder="Enter your contact number" />
            </div>
        </div>
       <div className="form-group row">
            <label htmlFor="message" className="col-sm-3 col-form-label">Enter your message:</label>
            <div className="col-sm-9">
                <textarea className="form-control" id="message" rows="3" placeholder="Enter your message"></textarea>
            </div>
        </div>
        <div className="form-group row">
        <div className="col-sm-12 text-center mt-3">
                <button type="submit" className="btn btn-primary"  onClick={Save1}>Submit</button>
            </div>
        </div>
        
        
    </form>
</div>
            </div>
        </div>
</div>
</div>


        </div>
        

       {/* <div className="container">
        <div class="about-container "style={{ maxWidth: '100%'}}>
            
            <div class="image-container " style={{ flex: 1}}>
                <img src={about} alt=""/>
                </div>
            <div class="text-container style={{ maxWidth: '50%',flex: 1}}">
                <h2 className="abouth2"><b>About Us</b></h2>
                <p>
Welcome to We Donate, where we are committed to revolutionizing the organ donation process. Our platform serves as a bridge between altruistic donors and individuals in need of life-saving organ transplants. Through our user-friendly website, donors can easily register to donate their organs, while patients can access a secure platform to request and receive organs. With a focus on efficiency, transparency, and compassion, we strive to streamline the donation process, ensuring that every donor's generous gift brings hope and healing to those in need.</p>
                
                <p>Join us in our mission to make organ donation accessible, efficient, and life-changing for both donors and recipients. Together, we can make a difference in the lives of countless individuals awaiting life-saving transplants.</p>                
            <p>
If you have any questions or require further information, please don't hesitate to contact us at <a href="mailto:wedonate@example.com">wedonate@gmail.com</a>.</p>
<p>Additionally, you can reach us at <a href="tel:+917867565786">+91-8989898989</a> or <a href="tel:+917867565786">+91-7867565786</a>. Feel free to utilize any of these contact methods to get in touch with us</p>
            </div>
            <div className="container formbdy fadmin p-3 rounded" style={{ maxWidth: '50%',flex: 1}}>
        <div className="panel rounded-top">
            <div className="panel-heading p-1 bg-primary text-black text-center rounded-top panelheading">
                    <h5><b>Contact Us</b></h5>
            </div>
        </div>
    <form className="mx-auto actualform p-2 rounded-bottom" >
    
        <div className="form-group row mb-1">
            <label htmlFor="name" className="col-sm-3 col-form-label">Name:</label>
            <div className="col-sm-9">
                <input type="text" className="form-control" id="name" placeholder="Enter your name" />
            </div>
        </div>
        <div className="form-group row">
            <label htmlFor="email" className="col-sm-3 col-form-label">Email:</label>
            <div className="col-sm-9">
                <input type="email" className="form-control" id="email" placeholder="Enter your email" onChange={(e)=>setusername(e.target.value)} />
                {/* You might want to add email validation here */}
            {/* </div>
        </div>
        <div className="form-group row">
            <label htmlFor="contactNumber" className="col-sm-3 col-form-label">Contact Number:</label>
            <div className="col-sm-9">
                <input type="tel" className="form-control" id="contactNumber" placeholder="Enter your contact number" />
            </div>
        </div>
       <div className="form-group row">
            <label htmlFor="address" className="col-sm-3 col-form-label">Enter your message:</label>
            <div className="col-sm-9">
                <textarea className="form-control" id="address" rows="3" placeholder="Enter your address"></textarea>
            </div>
        </div>
        <div className="form-group row">
        <div className="col-sm-12 text-center mt-3">
                <button type="submit" className="btn btn-primary"  onClick={Save1}>Submit</button>
            </div>
        </div>
        
        
    </form>
</div>
            
        </div> */}
  


{/* 
        </div> */} 

<div className="footer"> <Footer3/></div>

</div>



        
        </>
    );
}export default Contactus;