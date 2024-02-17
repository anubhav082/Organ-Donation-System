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
import Navbar2 from "../Components/Navbar2";
function Aboutus1()
{

    

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
                <div class="col-md-6 col-sm-6 bg-white bg-gradient" style={{textAlign: 'justify', padding : '30px 35px 25px 0'}}>
                <div className="shadow" style={{padding :'10px 20px 10px 20px'}}>
                    <h2 className="text-center text-primary">About Us</h2><br/>
                    
                    <p className="justify-content-between">Welcome to We Donate, where we are committed to revolutionizing the organ donation process. Our platform serves as a bridge between altruistic donors and individuals in need of life-saving organ transplants. Through our user-friendly website, donors can easily register to donate their organs, while patients can access a secure platform to request and receive organs. With a focus on efficiency, transparency, and compassion, we strive to streamline the donation process, ensuring that every donor's generous gift brings hope and healing to those in need.</p>
                    {/* <p>Join our mission for accessible, efficient organ donation, transforming lives of donors and recipients, making a difference together.</p>                 */}
                    <p>
If you have any questions or require further information, please don't hesitate to contact us at <a href="mailto:wedonate@example.com">wedonate@gmail.com</a>.</p>
<p>Additionally, you can reach us at <a href="tel:+918989898989">+91-8989898989</a> or <br/><a href="tel:+917867565786">+91-7867565786</a>. Feel free to utilize any of these contact methods to get in touch with us</p>
</div>
            </div>
        </div>
</div>
</div>


        </div>



       {/* <div className="container">
        <div class="about-container">
            
            <div class="image-container">
                <img src={about} alt=""/>
                </div>
            <div class="text-container">
                <h2 className="abouth2"><b>About Us</b></h2>
                <p>
Welcome to We Donate, where we are committed to revolutionizing the organ donation process. Our platform serves as a bridge between altruistic donors and individuals in need of life-saving organ transplants. Through our user-friendly website, donors can easily register to donate their organs, while patients can access a secure platform to request and receive organs. With a focus on efficiency, transparency, and compassion, we strive to streamline the donation process, ensuring that every donor's generous gift brings hope and healing to those in need.</p>
                
                <p>Join us in our mission to make organ donation accessible, efficient, and life-changing for both donors and recipients. Together, we can make a difference in the lives of countless individuals awaiting life-saving transplants.</p>                
            <p>
If you have any questions or require further information, please don't hesitate to contact us at <a href="mailto:wedonate@example.com">wedonate@gmail.com</a>.</p>
<p>Additionally, you can reach us at <a href="tel:+917867565786">+91-8989898989</a> or <a href="tel:+917867565786">+91-7867565786</a>. Feel free to utilize any of these contact methods to get in touch with us</p>
            </div>
            
        </div>
  



        </div> */}

<div className="footer"> <Footer3/></div>

</div>



        
        </>
    );
}export default Aboutus1;