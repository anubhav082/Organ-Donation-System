import Navbar1 from "../Components/Navbar1";
import Footer3 from '../Components/Footer3'
import './DonorLogin.css'
import './Login.css'
import { Link } from "react-router-dom";
import formphoto from '../3.jpg';
import { useState,useEffect } from "react";
import Home from "./Home";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faL,faPhone} from '@fortawesome/free-solid-svg-icons'
import {useNavigate } from "react-router-dom";
function DonorLogin()
{
    // const [name,setname]=useState("");
    const [email,setemail]=useState("");
    const [password,setpassword]=useState("");
    const [msg, setmsg]=useState();
    const [success, setsuccess]=useState();
    // const navigate3=useNavigate();
    const navigate =useNavigate();
    useEffect(() => {
        // If you need to navigate on mount, you can do it here
    }, []);
    const Save =()=>
    {
       
        // if(email.length==0)
        // {
        //     alert("Usename cannot be empty");
        //     return false;
        // }
        // else if(password.length==0)
        // {
        //     alert("password cannot be empty");
        //     return false;
        // }


        fetch('http://127.0.0.1:5000/login',{
            method:'POST',
            body:JSON.stringify({
                name:email,
                password:password
              

               
            }),
            headers:{
                "Content-type":"application/json; charset=UTF-8"
            }

        }).then(response=>{
            return response.json()
            // alert(response.json());
            // alert(response.ok)
            //     if(response.ok)
            // {
            //     navigate("/AdminLogin1")
            //     // setUsername(json.data);           
            //     // setLoginStatus("true");
            //     // setlogininfo(json.data)
            // }
            // else{
            //     alert("No");
            // }
            // return response.json()
            }).then(json=>{
            // alert(json.message)
            // alert(json.user_data)
            // setmsg(json.message)
            if(json.message==="1")
            {
                alert(json.message)
                // alert(json.user_data)
            
                navigate("/")
                navigate("/Home/"+json.user_data[0])
                
                
            }
            else{
                alert(json.message);
            }
            })
            .catch(error => {
                console.error('Error:', error);
                alert("An error occurred while logging in.");
            });   
    }
        let styleh2={
            
        }

    return(
        <>
        <div className="xyz">
        <Navbar1/>
        <h2 style={{textAlign : 'center',marginTop :'5px'}}>Donor Login Form</h2>

        <div className="container-fluid wholeformcomp" style={{ maxWidth: '100%', display: 'flex' }}> 
        <div style={{ flex: 1}}>
                        <img src={formphoto} alt="Your Image" style={{ maxWidth: '100%' }} />
                    </div>
        <div className="container fadmin   p-4 rounded" style={{ maxWidth: '50%', maxHeight : 'auto'}}>
        <div className="panel rounded-top">
            <div className="panel-heading p-1 bg-primary text-black text-center rounded-top panelheading">
                    <h5><b>Donor Login Form</b></h5>
            </div>
        </div>     
    <div className="mx-auto actualform">
    <div className="form-group row">
            <label htmlFor="userId" className="col-sm-3 col-form-label" >User ID:</label>
            <div className="col-sm-9 d-flex">
            <input type="text" className="form-control" id="userId" placeholder="Enter your user ID" onChange={(e)=>setemail(e.target.value)} />
            </div>
        </div>
        
        <div className="form-group row">
            <label htmlFor="password" className="col-sm-3 col-form-label">Password:</label>
            <div className="col-sm-9">
                <input type="password" className="form-control" id="password" placeholder="Enter your password" onChange={(e)=>setpassword(e.target.value)}/>
            </div>
        </div>
        <div className="form-group row">
        <div className="col-sm-12 text-center mt-3">
                <button type="submit" className="btn btn-primary" onClick={Save}>Submit</button>
            </div>
        </div>
        <div className="text-center">
                            
                                
                               <span>Not a member? </span><Link to="/DonorReg" className="ml-2 text-decoration-none">Register</Link>
                            
                        </div>
    </div>
    
</div>


</div>

<div className="footer"> <Footer3/></div>

</div>



        
        </>
    );
}export default DonorLogin;