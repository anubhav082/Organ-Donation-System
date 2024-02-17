import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faPhone} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

function Footer3()
{

    let style1={
       position : "fixed",
        marginBottom :"0px",
        bottom: 0,
        right:0,
        left :0

    };
    return(
        <>

        {/* <!-- Footer Start --> */}

    {/* <div class="footer container-fluid position-relative overlay-top bg-dark text-white-50 " style={style1}>
        <div class="container mt-2 pt-2">
            <div class="row">
                <div class=" mb-1">
                    <a href="index.html" class="navbar-brand">
                        <h3 class="mt-n2 text-uppercase text-white text-center"><i class="fa fa-book-reader mr-3"></i>Organ Donation</h3>
                    </a>
                    <p class="m-0">Accusam nonumy clita sed rebum kasd eirmod elitr. Ipsum ea lorem at et diam est, tempor rebum ipsum sit ea tempor stet et consetetur dolores. Justo stet diam ipsum lorem vero clita diam</p>
                </div>
                <div class="col-md-6 mb-5">
                    <h3 class="text-white mb-4">Newsletter</h3>
                    <div class="w-100">
                        <div class="input-group">
                            <input type="text" class="form-control border-light" style={{padding: "30px"}} placeholder="Your Email Address"/>
                            <div class="input-group-append">
                                <button class="btn btn-primary px-4">Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4 mb-0 d-flex flex-column align-items-center">
                    <h5 class="text-white mb-1">Get In Touch</h5>
                    <p className="mb-1"><i class="fa fa-map-marker-alt mr-1" ></i>123 Street, New York, USA</p>
                    <p className="mb-1"><i class="fa fa-phone-alt mr-1"></i>+91 9325110270</p>
                    <p className="mb-1"><i class="fa fa-envelope mr-1"></i>xyz.kolhapur@gmail.com</p>
                    <div class="d-flex justify-content-start mt-4">
                        <a class="text-white mr-4" href="#"><i class="fab fa-2x fa-twitter"></i></a>
                        <a class="text-white mr-4" href="#"><i class="fab fa-2x fa-facebook-f"></i></a>
                        <a class="text-white mr-4" href="#"><i class="fab fa-2x fa-linkedin-in"></i></a>
                        <a class="text-white" href="#"><i class="fab fa-2x fa-instagram"></i></a>
                    </div>
                </div>
                <div class="col-md-4 mb-0 d-flex flex-column align-items-center">
                    <h5 class="text-white mb-1">Our Social Media Handles</h5>
                    <div class="d-flex flex-column justify-content-start ">
                        <a class="text-white-50 mb-1" href="#"><i class="fa fa-angle-right mr-2"></i>Facebook</a>
                        <a class="text-white-50 mb-1" href="#"><i class="fa fa-angle-right mr-2"></i>instagram</a>
                       
                       
                    </div>
                </div>
                <div class="col-md-4 mb-0 d-flex flex-column align-items-center">
                    <h5 class="text-white mb-1">Quick Links</h5>
                    <div class="d-flex flex-column justify-content-center ">
                        <a class="text-white-50 mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Privacy Policy</a>
                        <a class="text-white-50 mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Terms & Condition</a>
                        <a class="text-white-50 mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Regular FAQs</a>
                        <a class="text-white-50 mb-1" href="#"><i class="fa fa-angle-right mr-2"></i>About</a>
                        <a class="text-white-50" href="#"><i class="fa fa-angle-right mr-2"></i>Contact</a>
                    </div>
                </div>
            </div>
        </div>
    </div> */}
    <div class="container-fluid footer bg-dark text-white-50 border-top py-2" style={{borderColor: "rgba(256, 256, 256, .1) !important;"}}>
        <div class="container">
            <div class="row align-items-center">
                <div class=" text-center text-md-left mb-3 mb-md-0 col-md-11">
                    <p class="m-0">Copyright &copy; <a class="text-primary" href="#">We Donate</a>. All Rights Reserved.
                    </p>
                    
                </div>
                <div className="col-md-1 d-flex justify-content-end">
                <a href='mailto:wedonate@gmail.com' className='mr-3 social-icon' style={{marginRight : "15px"}}><FontAwesomeIcon icon={faEnvelope} /></a>
                <a href='https://twitter.com/your_twitter_profile' className='mr-3 social-icon' style={{marginRight : "15px"}}><FontAwesomeIcon icon={faTwitter}/></a>
                <a href='https://facebook.com/your_facebook_profile' className='mr-2 social-icon' style={{marginRight : "15px"}}><FontAwesomeIcon icon={faFacebook}/></a>
                <a href='https://instagram.com/your_instagram_profile' className='mr-2 social-icon' style={{marginRight : "15px"}}><FontAwesomeIcon icon={faInstagram}/></a>
                <a href='https://linkedin.com/in/your_linkedin_profile' className='mr-2 social-icon' style={{marginRight : "15px"}}><FontAwesomeIcon icon={faLinkedin}/></a>
                <a href="tel:+918989898989" className='mr-2 social-icon' style={{marginRight : "15px"}}><FontAwesomeIcon icon={faPhone}/></a>
                
                </div>
                {/* <div class="col-md-6 text-center text-md-right">
                    <p class="m-0">Designed by <a class="text-white" href="https://htmlcodex.com">HTML Codex</a>
                    </p>
                </div> */}
            </div>
        </div>
    </div>
    {/* <!-- Footer End --> */}
        
        </>
    );
}export default Footer3;