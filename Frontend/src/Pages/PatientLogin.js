import Navbar1 from "../Components/Navbar1";
import './PatientLogin.css'
import Footer3 from '../Components/Footer3'
import './Login.css'
import formphoto from '../3.jpg';
import { useState } from "react";
import { Link } from "react-router-dom"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faPhone,faUser} from '@fortawesome/free-solid-svg-icons'
function PatientLogin()
{
    const [username,setusername]=useState("");
    const [email,setemail]=useState("");
    const [password,setpassword]=useState("");
    const Save =()=>
    {
        if(email.length==0)
        {
            alert("Usename cannot be empty");
            return false;
        }
        else if(password.length==0)
        {
            alert("password cannot be empty");
            return false;
        }
       
    }
        let styleh2={
            
        }

    return(
        <>
        <div className="xyz">
        <Navbar1/>
        <h2 style={{textAlign : 'center',marginTop :'5px'}}>Patient Login Form</h2>
        <div className="container-fluid wholeformcomp" style={{ maxWidth: '100%', display: 'flex' }}> 
        <div style={{ flex: 1}}>
                        <img src={formphoto} alt="Your Image" style={{ maxWidth: '100%', height: '100%' }} />
                    </div>
        <div className="container fadmin p-4 rounded" style={{ maxWidth: '50%' }}>
        <div className="panel rounded-top">
            <div className="panel-heading p-1 bg-primary text-black text-center rounded-top panelheading">
                    <h5><b>Patient Login Form</b></h5>
            </div>
        </div>      
    <form className="mx-auto actualform" action="/PatientReg.js" method="get">
    <div className="form-group row">
            <label htmlFor="userId" className="col-sm-3 col-form-label" >User ID:</label>
            <div className="col-sm-9">
            
                <input type="text" className="form-control ml-2" id="userId" placeholder="Enter your user ID" onChange={(e)=>setemail(e.target.value)} />
            </div>
        </div>
        
        <div className="form-group row">
            <label htmlFor="password" className="col-sm-3 col-form-label">Password:</label>
            <div className="col-sm-9">
                <input type="password" className="form-control" id="password" placeholder="Enter your password" onChange={(e)=>setpassword(e.target.value)}/>
            </div>
        </div>
        <div className="form-group row">
            {/* <div className="col-sm-9 offset-sm-3"> */}
            <div className="col-sm-12 text-center mt-3">
                <button type="submit" className="btn btn-primary" onClick={Save}>Login</button>
            </div>
        </div>
        <div className="text-center">
                            
                                
                               <span>Not a member? </span><Link to="/PatientReg" className="ml-2 text-decoration-none">Register</Link>
                            
                        </div>
    </form>
    
                    </div>
                </div>


<div className="footer"> <Footer3/></div>


</div>



        
        </>
    );
}export default PatientLogin;