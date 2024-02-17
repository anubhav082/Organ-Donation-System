import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link for navigation
import "./A_Register.css";
import Footer3 from '../Components/Footer3';
import Navbar2 from '../Components/Navbar2';

function A_forgot_password() {
    const [userName, setUserName] = useState('');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [registrationSuccess, setRegistrationSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleUpdatePassword = () => {
        if(mobile.length==0)
      {
            alert("mobile number Cannot be Empty");
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
        
        
    
        fetch('http://127.0.0.1:5000/forgot', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                phone: mobile,
                password: password,
                confirm_password: confirmPassword
            })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Password update failed');
            }
            return response.json();
        })
        .then(data => {
            console.log('Password update successful:', data);
            setRegistrationSuccess(true);
            setTimeout(() => {
                // Redirect to login page after 2 seconds
                console.log("Redirecting to login page...");
                window.location.href = '/A_Login';
            }, 2000);
        })
        .catch(error => {
            console.error('Password update error:', error);
            setErrorMessage('Password update failed. Please try again later.');
        });
    };

    return (
        <>
        <div className='A_register'>
        <Navbar2/>
        <Container className="register-container">
            {!registrationSuccess ? (
                <>
                    <h2>Change Password</h2>
                    <Form>
                        {/* <Form.Group controlId="formBasicFirstName">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Enter username" value={userName} onChange={(e) => setUserName(e.target.value)} />
                        </Form.Group> */}

                        <Form.Group controlId="formBasicMobile">
                            <Form.Label>Mobile</Form.Label>
                            <Form.Control type="text" placeholder="Enter mobile number" value={mobile} onChange={(e) => setMobile(e.target.value)} />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </Form.Group>

                        <Form.Group controlId="formBasicConfirmPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                        </Form.Group>

                        <Button className='mt-3' variant="primary" type="button" onClick={handleUpdatePassword}>
                            Update Password
                        </Button>
                    </Form>
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                    <p>Already have an account? <Link to="/A_Login">Login</Link></p>
                </>
            ) : (
                <p>Password update successful! Redirecting to login page...</p>
            )}
        </Container>
        <div className="footer1"> <Footer3/></div>
        </div>
        </>
    );
}

export default A_forgot_password;
