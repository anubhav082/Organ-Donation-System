import Navbar1 from "../Components/Navbar1";
import './Home.css'
import Footer3 from '../Components/Footer3'
import Footer1 from "../Components/Footer1";
import Footer2 from '../Components/Footer2'
import TopNavBar from '../Components/TopNavBar'
import homebac from '../4.jpg'
import {faCheck} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Navbar2 from "../Components/Navbar2";
function Home()
{
  const {user_data} = useParams();

//   useEffect(()=>
// {
// alert(user_data)
// }
// );
    let boxstyle={
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
        
    }
    
    

    return(
        <>
        <div className="homebody bg-body-tertiary">
            {/* <TopNavBar/> */}
        {/* <Navbar1/> */}
        <Navbar2/>
        <div className="home-background">
          
        </div>
 {/* Our Why Organ Donation */}
 


<div class="section-home1 mt-5 mb-5 text-center">
    <div class="container">
        <div class="row gx-0 box-shadow">
                <div className=" col-md-6 col-sm-6 ">
                <img src={homebac}  alt="abc" style={{maxHeight: '100%', width: '100%'}}/>
                </div>
                <div class="col-md-6 col-sm-6 d-flex flex-column p-4 linear-gradient1" style={{textAlign: 'justify'}}>
                    <h3 className="text-center mb-5 mt-5">Why Organ Donation Is Important</h3>
                    <p className="justify-content-between">  Organ donation provides the opportunity to save or enhance the lives of individuals suffering from organ failure or life-threatening conditions. Transplants offer a second chance at life and can significantly improve the quality of life for recipients.</p>
                    <p> Donating organs can alleviate the suffering of patients and their families who are awaiting transplant surgeries. It offers hope and relief to those facing the uncertainty of prolonged illness or the loss of a loved one.</p>
                    <p>Organ donation drives medical research and innovation. The study of donated organs contributes to the development of new treatments, surgical techniques, and therapies, ultimately advancing medical science and improving healthcare outcomes for all.</p>
            <p> Organ donation can save the lives of individuals suffering from organ failure, providing them with a chance for a healthier and longer life.</p>
            <p> Organ donation is a selfless act that offers the chance of life to individuals suffering from organ failure. By donating organs such as kidneys, hearts, or livers, donors provide recipients with a new lease on life. This act of generosity not only saves lives but also brings hope and comfort to families facing the uncertainty of their loved one's health.</p>
            </div>
        </div>
</div>
</div>


        {/* Our Mission */}
        {/* <div class="section-home about-us fadeIn animated mt-5 mb-5 text-center">

        <div class="container">

            <div class="row">

                <div class="col-md-3 col-sm-6 ">
                
                  <div class="about-us-col linear-gradient box-shadow p-3 ">

                        <div class="col-icon-wrapper">
                          <img src="assets/images/icons/our-mission-icon.png" alt=""/>
                        </div>
                        <h3 class="col-title">Our Mission</h3>
                        <div class="col-details text-white">

                          <p>Our mission is to connect donors and recipients seamlessly through our website, ensuring no opportunity for organ donation is missed, and ultimately saving lives.</p>
                          
                        </div>
                        <a href="#" class="btn"> Read more </a>
                    
                  </div>
                  
                </div>


                <div class="col-md-3 col-sm-6 ">
                
                  <div class="about-us-col linear-gradient box-shadow p-3">

                        <div class="col-icon-wrapper">
                          <img src="assets/images/icons/make-donation-icon.png" alt=""/>
                        </div>
                        <h3 class="col-title">Make Donations</h3>
                        <div class="col-details">

                            <p>Organ donation offers individuals facing organ failure or life-threatening conditions or dieses the chance for a new better and efficient life and improved quality</p>                          
                        </div>
                        <a href="#" class="btn btn-dark"> Read more </a>
                    
                  </div>
                  
                </div>


                <div class="col-md-3 col-sm-6 " >
                
                  <div class="about-us-col linear-gradient box-shadow p-3">

                        <div class="col-icon-wrapper">
                          <img src="assets/images/icons/help-icon.png" alt=""/>
                        </div>
                        <h3 class="col-title">Help & Support</h3>
                        <div class="col-details">

                          <p>For assistance and support, please visit our website's About Us and Contact Us pages. There, you'll find additional information and means to reach out for further assistance.</p>
                          
                        </div>
                        <a href="#" class="btn btn-dark"> Read more </a>
                    
                  </div>
                  
                </div>


                <div class="col-md-3 col-sm-6 " >
                
                  <div class="about-us-col linear-gradient box-shadow p-3">

                        <div class="col-icon-wrapper">
                          <img src="assets/images/icons/programs-icon.png" alt=""/>
                        </div>
                        <h3 class="col-title">Organ Donation</h3>
                        <div class="col-details">
                          
                          <p >

                          Through our We Donate organization's website, individuals can donate organs, enabling patients in need to receive transplants for eyes, heart, kidney, and liver</p>                          
                        </div>
                        <a href="#" class="btn btn-dark"> Read more </a>
                    
                  </div>
                  
                </div>
                

                
            </div>

        </div>
      
    </div> */}

     {/* Footer */}
        <div className="footer"> <Footer3/></div>
       {/* <Footer3/> */}
        

        </div>
           
        </>
    );
}export default Home;