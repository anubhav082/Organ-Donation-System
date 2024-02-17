import React, { useState, useEffect } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import Footer3 from '../Components/Footer3'
import { Link, useNavigate } from "react-router-dom";
import "./A_Login.css";
import Navbar2 from "../Components/Navbar2";
import { useContext } from 'react';
import UserContext from '../Components/UserContext';

function A_Login() {
    const { setUsername2 } = useContext(UserContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginError, setLoginError] = useState(false);
    const [loginMessage, setLoginMessage] = useState("");
    const [loginSuccess, setLoginSuccess] = useState(false);
    const [registerMessage, setRegisterMessage] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
        if (username.length === 0) {
            setLoginError(true);
            setLoginMessage("Username cannot be empty");
            return false;
        }
        if (password.length === 0) {
            setLoginError(true);
            setLoginMessage("Password cannot be empty");
            return false;
        }

        fetch("http://localhost:5000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: username,
                password: password
            }),
        })
        .then((response) => response.json())
        .then((data) => {
            if (data.message === "Login successfully") {
                setUsername2(data.user_data);
                setLoginSuccess(true);
                setLoginMessage("Login successful. Redirecting to home page...");
                setTimeout(() => {
                    navigate("/Home1");
                }, 1000);
            } else if (data.message === "Register yourself") {
                setRegisterMessage("Register Yourself");
            } else {
                setLoginError(true);
                setLoginMessage("Invalid username or password");
            }
        })
        .catch((error) => {
            console.error("Error:", error);
            setLoginError(true);
            setLoginMessage("An error occurred while logging in.");
        });
    };

    return (
        <>
            <div className="A-inial-login mt-0">
                <Navbar2 />
                <Container className="login-container">
                    <h2>Login</h2>
                    <Form>
                        <Form.Group controlId="formBasicUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
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
                        <Button variant="primary" type="button" onClick={handleLogin}>
                            Login
                        </Button>
                        {loginError && (
                            <Alert variant="danger">
                                {loginMessage}
                            </Alert>
                        )}
                        {registerMessage && (
                            <Alert variant="warning">
                                {registerMessage}
                            </Alert>
                        )}
                        {loginSuccess && (
                            <Alert variant="success">
                                {loginMessage}
                            </Alert>
                        )}
                    </Form>
                    <p>
                        Forgot Password? <Link to="/A_forgot_password">Click Here</Link>
                        <br />
                        Don't have an account? <Link to="/A_Register">Register</Link>
                    </p>
                    <p></p>
                </Container>
                <div className="footer1">
                    <Footer3 />
                </div>
            </div>
        </>
    );
}

export default A_Login;
