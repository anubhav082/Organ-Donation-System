import React, { useState } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap'; // Import Alert component from react-bootstrap
import './A_Login.css'; // Import custom CSS for styling
import Navbar1 from "../Components/Navbar1";
import Footer3 from '../Components/Footer3'
import Navbar2 from '../Components/Navbar2';

function A_adminLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(''); // State for error message

    const handleLogin = () => {
        // Dummy login logic for demonstration purposes
        // Replace this with actual login logic
        if(username.length === 0 || password.length === 0) {
            setErrorMessage('Username and password cannot be empty');
        } else if (username !== 'admin' || password !== '123') {
            setErrorMessage('Incorrect username or password');
        } else {
            // Redirect to dashboard upon successful login
            window.location.href = '/Admindashboard';
        }
    };

    return (
        <>
            <div className="A-inial-login mt-0">
                <Navbar2/>
                <Container className="login-container">
                    <h2>Admin Login</h2>
                    <Form>
                        <Form.Group controlId="formBasicUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </Form.Group>
                        <Button variant="primary" type="button" onClick={handleLogin}>
                            Login
                        </Button>
                        {errorMessage && <Alert variant="danger">{errorMessage}</Alert>} {/* Render error message if it exists */}
                    </Form>
                    {/* <Button variant="link" onClick={handleForgotPassword}>Forgot Password?</Button> */}
                </Container>
            </div>
            <div className="footer1"> <Footer3/></div>
        </>
    );
}

export default A_adminLogin;
