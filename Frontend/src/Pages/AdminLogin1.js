import Navbar1 from "../Components/Navbar1";
import './AdminLogin1.css'
import Footer3 from '../Components/Footer3'
import formphoto from '../3.jpg';
import { useState } from "react";
import {useNavigate } from "react-router-dom";
import './Login.css'
function AdminLogin1()
{

    const navigate3=useNavigate();
    const [username,setusername]=useState("");
    const [password,setpassword]=useState("");
    const Save =()=>
    {
        if(username.length==0)
        {
            alert("Usename cannot be empty");
            return false;
        }
        else if(password.length==0)
        {
            alert("password cannot be empty");
            return false;
        }
        if(username==="admin" )
        {
            if( password ==="123")
            {
                navigate3("/Admindashboard")
            }
            else{
                alert("Incorrect Password");
            return false;
            }
                      
            
        }
        else{
            alert("Incorrect Username");
            return false;
        }
    }
        let styleh2={
            
        }

    return(
        <>
        <div className="xyz">
        <Navbar1/>
        <h2 style={{textAlign : 'center',marginTop :'5px'}}>Admin Login Form</h2>
        <div className="container-fluid wholeformcomp" style={{ maxWidth: '100%', display: 'flex' }}> 
        <div style={{ flex: 1}}>
                        <img src={formphoto} alt="Your Image" style={{ maxWidth: '100%' }} />
                    </div>
        <div className="container fadmin  p-4 rounded" style={{ maxWidth: '50%' }}>
        <div className="panel rounded-top">
            <div className="panel-heading p-1 bg-primary text-black text-center rounded-top panelheading">
                    <h5><b>Admin Login Form</b></h5>
            </div>
        </div>
    <form className="mx-auto actualform">
    <div className="form-group row">
            <label htmlFor="userId" className="col-sm-3 col-form-label" >User ID:</label>
            <div className="col-sm-9">
                <input type="text" className="form-control" id="userId" placeholder="Enter your user ID" onChange={(e)=>setusername(e.target.value)} />
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
    </form>
</div>


</div>


<div className="footer"> <Footer3/></div>
</div>


        
        </>
    );
}export default AdminLogin1;