import Navbar1 from "../Components/Navbar1";
import Footer3 from '../Components/Footer3';
import './DonorReg.css';
import formphoto from '../3.jpg';
import { useState } from "react";
import { Link } from "react-router-dom";
function Initial_login()
{
    const [password,setpassword]=useState("");
    const [reenterPassword,setreenterPassword]=useState("");
    const [fname,setName]=useState("");
    const [contactNumber,setcontactNumber]=useState("");
    const [bloodGroup,setbloodGroup]=useState("");
    const [gender,setgender]=useState("");
    const [address,setaddress]=useState("");
    const [email,setemail]=useState("");
    const [organ,setorgan]=useState("");
    const [age,setage]=useState("");
    const [donate,setdonate]=useState("");
    const [datetime1,setdatetime1]=useState("");
    const [alive,setalive]=useState("");
const [file,setfile]=useState("");
    


    const Save1 =()=>
    {
      
        if(fname.length==0)
        {
            alert("Name Cannot be Empty");
            return false;
        }
        else if(!fname.match(/^[A-Za-z]+$/))
        {
            setName("Enter valid name");
            return false;
        }
       
        if(age.length==0)
        {
            alert("age cannot be empty");
            return false;
        }
        if(bloodGroup.length==0){
            alert("blood Group Cannot be Empty");
            return false;
        }
        if(gender.length==0){
            alert("Gender Cannot be Empty");
            return false;
        }
        if(address.length==0){
            alert("address Cannot be Empty");
            return false;
        }
        if(email.length==0){
            alert("email Cannot be Empty");
            return false;
        }
        if(contactNumber.length==0){
            alert("Contact Number Cannot be Empty");
            return false;
        }
        else if(!contactNumber.match(/^\d{10}$/))
        {
            // setmobcontact("Enter valid studMobile");
            alert("Invalid Contact Number")
            return false;
        }
        if(donate.length==0)
        {
            alert("Please confirm that you want to donate organ")
            return false;
        }
        if(organ.length==0)
        {
            alert("Organ cannot be empty");
            return false;
        }
        // if(datetime1.length==0){
        //     alert("datetime1 Cannot be Empty");
        //     return false;
        // }
        if(alive.length==0)
        {
                      
            alert("Select Donor alive or dead");
            return false;
        }
        // else{
        //     alert(alive)
        // }
        if(alive==="dead")
        {
            if(file.length==0)
            {
                alert("Please upload death certificate of Donor");
                return false;
            }
        }

        
        //  if(password.length==0)
        // {
        //     alert("password cannot be empty");
        //     return false;
        // }
        // if(reenterPassword.length==0)
        // {
        //     alert("Reentered password cannot be empty");
        //     return false;
        // }
        //  if(password != reenterPassword)
        // {
                      
        //     alert("Reenterd password not similar to previous password");
        //     return false;
        // }
        
        
        
       
        
       
       
       
        
        
      
        
        


    }
        
      
        
        


        let styleh2={
            
        }

    return(
        <>
        <div className="xyz">
        <Navbar1/>
        <h2 style={{textAlign : 'center',marginTop :'30px'}}>Login Yourself Here</h2>
        <div className="container-fluid  " style={{ maxWidth: '50%', display: 'flex' }}> 
        {/* <div style={{ flex: 1}}>
                        <img src={formphoto} alt="Your Image" style={{ maxWidth: '100%', height: '100%' }} />
                    </div> */}
        

        <div className="container formbdy fadmin p-3 rounded" style={{ maxWidth: '50%'}}>
        <div className="panel rounded-top">
            <div className="panel-heading p-1 bg-primary text-black text-center rounded-top panelheading">
                    <h5><b>Login Page</b></h5>
            </div>
        </div>
    <div className="mx-auto actualform p-2 rounded-bottom" >
    
        <div className="form-group row mb-1">
            <label htmlFor="name" className="col-sm-3 col-form-label">Name:</label>
            <div className="col-sm-9">
                <input type="text" className="form-control" id="name" placeholder="Enter your name" onChange={(e)=>setName(e.target.value)}/>
            </div>
        </div>
        <div className="form-group row mb-1">
            <label htmlFor="password" className="col-sm-3 col-form-label">Password:</label>
            <div className="col-sm-9">
                <input type="text" className="form-control" id="password" placeholder="Enter your Password" onChange={(e)=>setName(e.target.value)}/>
            </div>
        </div>
        
        
        
       
        
        
        <div className="form-group row">
            <label htmlFor="contactNumber" className="col-sm-3 col-form-label">Contact Number:</label>
            <div className="col-sm-9">
                <input type="tel" className="form-control" id="contactNumber" placeholder="Enter your contact number" onChange={(e)=>setcontactNumber(e.target.value)} />
            </div>
        </div>
        
        
        
      
        {/* <div className="form-group row">
            <label htmlFor="password" className="col-sm-3 col-form-label">Password:</label>
            <div className="col-sm-9">
                <input type="password" className="form-control" id="password" placeholder="Enter your password" onChange={(e)=>setpassword(e.target.value)}/>
            </div>
        </div>

        <div className="form-group row">
            <label htmlFor="reenterPassword" className="col-sm-3 col-form-label">Re-enter Password:</label>
            <div className="col-sm-9">
                <input type="password" className="form-control" id="reenterPassword" placeholder="Re-enter your password" onChange={(e)=>setreenterPassword(e.target.value)} />
            </div>
        </div> */}
        <div className="form-group row">
        <div className="col-sm-12 text-center mt-3">
                <button type="submit" className="btn btn-primary"  onClick={Save1}><Link to="/Home1" className="ml-2 text-decoration-none text-white">Login</Link></button>
            </div>
        </div>
        <div className="text-center">
                            
                                
                               <span>Not a member? </span><Link to="/Initisal_Register" className="ml-2 text-decoration-none">Register</Link> <br/>
                               <span>Forgot Password </span><Link to="/Initisal_Register" className="ml-2 text-decoration-none">Click Here</Link>

                        </div>
        
        
    </div>
</div>

</div>



<div className="footer1" style={{ marginTop: '10px' }}> <Footer3/></div>
{/* <Footer3/> */}
</div>



        
        </>
    );
}export default Initial_login;