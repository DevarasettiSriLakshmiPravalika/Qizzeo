import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from '../LOGO1.png';
import './css/Signup.css';
import Button from "./Button";

const Signup = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        email: "",
        name: "",
        password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/Quiz/addUD', userData);
            console.log(response.data);
            navigate('/home');
        } catch (error) {
            console.error('Error during signup:', error);
            alert('Signup failed. Please try again.');
        }
    };

    return (
        <div>
            <img className="Logo" src={logo} height="90px" width="200px" alt="Logo" />
            <div className="signupD">
                <h1 className="l1">SIGNUP</h1>
                <form onSubmit={handleSubmit}>
                    <center>
                        <input
                            className="txt"
                            type="text"
                            name="name"
                            value={userData.name}
                            onChange={handleChange}
                            placeholder="NAME"
                            required
                        />
                        <br /><br />
                        <input
                            className="txt"
                            type="email"
                            name="email"
                            value={userData.email}
                            onChange={handleChange}
                            placeholder="EMAIL"
                            required
                        />
                        <br /><br />
                        <input
                            className="txt"
                            type="password"
                            name="password"
                            value={userData.password}
                            onChange={handleChange}
                            placeholder="PASSWORD"
                            required
                        />
                        <br /><br />
                        <p className="l5">
                            Already have an account? <a className="l6" href="/login">Login</a>
                        </p>
                    </center>
                    <button className="sub" type="submit"><Button text="Sign Up"/></button>
                </form>
            </div>
        </div>
    );
};

export default Signup;
