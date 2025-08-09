import React from 'react';
import './css/Landing.css'; // Import the CSS file
import logo from '../LOGO1.png';
import photo from '../image.png';
import Button from './Button';
import { Link } from 'react-router-dom';


const Landing = ()=>{
    return(
        <div>
            <img className="Logo" src={logo} height="90px" width="200px" alt="Logo" />
            <text className='Heading'>Engage and Educate with <br/>Interactive Quizzes</text>
            <p className="topic">Easily create and share fun quizzes for any occasion.  Test knowledge,<br/> boost engagement, and make learning enjoyable for colleagues,<br/> friends, or students.</p>
            <img className="Photo" src={photo} height="460px" width="496px" alt="landImg"/>
            <a className="Login" href="#/login">Login</a>
            <Link className="signB" to ="/signup">
                <Button text="Signup"/>
            </Link>
        </div>
    );
}

export default Landing;
