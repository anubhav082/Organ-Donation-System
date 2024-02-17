// import React, { useState } from 'react';
// import { Form, Button, Container } from 'react-bootstrap';
// import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
// import "./A_Register.css";
// import Footer3 from '../Components/Footer3';
// import Navbar1 from '../Components/Navbar1';
// import Navbar2 from '../Components/Navbar2';


// function A_Register() {
//     const [userName, setUserName] = useState('');
//     const [mobile, setMobile] = useState('');
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');
//     const [registrationSuccess, setRegistrationSuccess] = useState(false);
//     const [errorMessage, setErrorMessage] = useState('');
//     const navigate = useNavigate(); // useNavigate hook

//     const handleRegister = () => {

//         if(userName.length==0)
//         {
//             alert("Name Cannot be Empty");
//             return false;
//         }
//         // else if(!userName.match(/^[A-Za-z]+$/))
//         // {
//         //     setName("Enter valid name");
//         //     return false;
//         // }
//        if(mobile.length==0){
//             alert("Contact Number Cannot be Empty");
//             return false;
//         }
//         else if(!mobile.match(/^\d{10}$/))
//         {
           
//             alert("Invalid Contact Number")
//             return false;
//         }
//         if(password.length==0)
//         {
//             alert("password cannot be empty");
//             return false;
//         }
//         if(confirmPassword.length==0)
//         {
//             alert("Reentered password cannot be empty");
//             return false;
//         }
        
    
    
//         if (password !== confirmPassword) {
//             setErrorMessage('Passwords do not match');
//             return;
//         }

//          fetch('http://127.0.0.1:5000/register', 
//          {
//             method:'POST',
//             body:JSON.stringify({
//                 name: userName,
//                 password: password,
//                 phone :mobile,
//                 confirm_password: confirmPassword
              

               
//           }),
//             headers:{
//                 "Content-type":"application/json; charset=UTF-8"
//             }

//         }).then(response=>{
//             return response.json()
//             // alert(response.json());
//             // alert(response.ok)
//             //     if(response.ok)
//             // {
//             //     navigate("/AdminLogin1")
//             //     // setUsername(json.data);           
//             //     // setLoginStatus("true");
//             //     // setlogininfo(json.data)
//             // }
//             // else{
//             //     alert("No");
//             // }
//             // return response.json()
//             }).then(json=>{
//             // alert(json.message)
//             // alert(json.user_data)
//             // setmsg(json.message)
//             if(json.message==="Registered successfully")
//             {
//                 alert(json.message)
//                 navigate("/A_Login")
                
                
//             }
//             else{
//                 alert(json.message);
//             }
//             })
//             .catch(error => {
//                 console.error('Error:', error);
//                 alert("An error occurred while logging in.");
//             });   
//         //{
//         //     method: 'POST',
//         //     headers: {
//         //         'Content-Type': 'application/json'
//         //     },
//         //     body: JSON.stringify({
//         //         name: userName,
//         //         password: password,
//         //         phone :mobile,
//         //         confirm_password: confirmPassword
//         //     })
//         // })
//         // .then(response => {
//         //     if (!response.ok) {
//         //         throw new Error('Registration failed');
//         //     }
//         //     return response.json();
//         // })
        
//         // .then(data => {
//         //     console.log('Registration successful:', data);
//         //     setRegistrationSuccess(true);
//         // })
//         // .catch(error => {
//         //     console.error('Registration error:', error);
//         //     setErrorMessage('Registration failed. Please try again later.');
//         // });
//     };

//     return (
//         <>
//         <div className='A_register'>
//         <Navbar2/>
//         <Container className="register-container">
//             {!registrationSuccess ? (
//                 <>
//                     <h2>Register</h2>
//                     <Form>
//                         <Form.Group controlId="formBasicFirstName">
//                             <Form.Label>Username</Form.Label>
//                             <Form.Control type="text" placeholder="Enter username" value={userName} onChange={(e) => setUserName(e.target.value)} />
//                         </Form.Group>

//                         <Form.Group controlId="formBasicMobile">
//                             <Form.Label>Mobile</Form.Label>
//                             <Form.Control type="text" placeholder="Enter mobile number" value={mobile} onChange={(e) => setMobile(e.target.value)} />
//                         </Form.Group>

//                         <Form.Group controlId="formBasicPassword">
//                             <Form.Label>Password</Form.Label>
//                             <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
//                         </Form.Group>

//                         <Form.Group controlId="formBasicConfirmPassword">
//                             <Form.Label>Confirm Password</Form.Label>
//                             <Form.Control type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
//                         </Form.Group>

//                         <Button variant="primary" type="button" onClick={handleRegister}>
//                             Register
//                         </Button>
//                     </Form>
//                     {errorMessage && <p className="error-message">{errorMessage}</p>}
//                     <p>Already have an account? <Link to="/A_Login">Login</Link></p>
//                 </>
//             ) : (
//                 navigate('/A_Login') // Navigate to the login page after successful registration
//             )}
//         </Container>
//         <div className="footer1"> <Footer3/></div>
//         </div>
//         </>
//     );
// }

// export default A_Register;




import React, { useState, useEffect } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import Link for navigation
import "./A_Register.css";
import Footer3 from "../Components/Footer3";
import Navbar2 from "../Components/Navbar2";

function A_Register() {
  const [userName, setUserName] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleRegister = () => {
    // Validation code...

    if(userName.length==0)
        {
            alert("Name Cannot be Empty");
            return false;
        }
      if(mobile.length==0)
      {
            alert("mobile number Cannot be Empty");
            return false;
      }
      else if(!mobile.match(/^\d{10}$/))
      {
          alert("Invalid Contact Number")
          return false;
      }
      if(password.length==0)
        {
            alert("password cannot be empty");
            return false;
        }
        if(confirmPassword.length==0)
        {
            alert("Reentered password cannot be empty");
            return false;
        }
        if (password !== confirmPassword) {
                      setErrorMessage('Passwords do not match');
                      return;
        }

    // Send registration request to backend
    fetch("http://127.0.0.1:5000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: userName,
        phone: mobile,
        password: password,
        confirm_password: confirmPassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Registration response:", data);
        if (data.message === "Registered successfully") {
          setRegistrationSuccess(true);
        } else {
          setErrorMessage(data.message);
        }
      })
      .catch((error) => {
        console.error("Registration error:", error);
        setErrorMessage("Registration failed. Please try again later.");
      });
  };

  useEffect(() => {
    if (registrationSuccess) {
      setTimeout(() => {
        window.location.href = "/A_Login"; // Redirect to login page after 2 seconds
      }, 2000);
    }
  }, [registrationSuccess]);

  return (
    <div className="A_register">
      <Navbar2 />
      <Container className="register-container">
        {!registrationSuccess ? (
          <>
            <h2>Register</h2>
            <Form>
              <Form.Group controlId="formBasicFirstName">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter username"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formBasicMobile">
                <Form.Label>Mobile</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter mobile number"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formBasicConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </Form.Group>

              <Button className="mt-3" variant="primary" type="button" onClick={handleRegister}>
                Register
              </Button>
            </Form>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <p>
              Already have an account? <Link to="/A_Login">Login</Link>
            </p>
          </>
        ) : (
          <p>Registration successful! Redirecting to login page...</p>
        )}
      </Container>
      <div className="footer1">
        {" "}
        <Footer3 />
      </div>
    </div>
  );
}

export default A_Register;
