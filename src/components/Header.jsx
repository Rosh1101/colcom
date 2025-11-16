import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/App.css'


function Header() {
return (
    <header class="navbar">
        <div class="nav-left">
            <div class="logo">
                <span class="logo-text"><b>ColCom</b></span>
            </div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/">Report Issue</Link>
                <Link to="/">Campus Map</Link>
                <Link to="/">Communities</Link>
                <Link to="/">Gallery</Link>
                <Link to="/">Feedback</Link>
            </nav>
        </div>
    
        <div class="nav-right">
            <Link to="/login"><button class="login-btn">Login</button></Link>
            <Link to="/signup"><button class="signup-btn">Sign Up</button></Link>
        </div>
    </header>
);
}

export default Header