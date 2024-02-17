import Footer3 from '../Components/Footer3'
import AdminNavbar from '../Components/AdminNavbar'
import './Aboutus.css'
import about from '../about1.jpg'
function Aboutus()
{



    return(
        <>
        <AdminNavbar/>
        <div class="wrapper">
        <div class="background-container">
            {/* <div class="bg-1"></div>
            <div class="bg-2"></div> */}
    
        </div>
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

            </div>
    <div className="footer2"><Footer3/></div>
        </>
    );

}export default Aboutus;