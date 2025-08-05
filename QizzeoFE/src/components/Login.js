import React, { useState } from 'react';
import logo from '../LOGO1.png';
import "./css/Login.css";
import Button from "./Button";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({
            ...credentials,
            [name]: value
        });
    };

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/Quiz/login', credentials);
            console.log('Login successful:', response.data);
            navigate('/home');
        } catch (err) {
            console.error('Login error:', err);
            window.alert("Invalid email or password. Please try again.");
        }
    };

    return (
        <div>
            <img className="Logo" src={logo} height="90px" width="200px" alt="Logo" />
            <div className='loginD'>
                <text className='l1'>LOGIN</text>
                <form onSubmit={handleLogin}>
                    <center>
                        <input
                            className='txt'
                            type='email'
                            name='email'
                            placeholder='EMAIL'
                            value={credentials.email}
                            onChange={handleChange}
                            required
                        /><br /><br /><br />
                        <input
                            className='txt'
                            type='password'
                            name='password'
                            placeholder='PASSWORD'
                            value={credentials.password}
                            onChange={handleChange}
                            required
                        /><br />
                        <a href='/landing' className='l2'>Forgot Password?</a><br /><br />
                        <text className='l3'>Don't have an account? <a href='/signup' className='l4'>Sign Up</a></text><br /><br />
                    </center>
                    <button className='sub' type='submit'>
                        <Button text="Go" />
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;
