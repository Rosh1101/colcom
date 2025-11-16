
import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
           ColCom
        </div>
        <nav className="nav">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/issues" className="nav-link">Report Issue</Link>
                <Link to="/map" className="nav-link">Campus Map</Link>
                <Link to="/communities" className="nav-link">Communities</Link>
                <Link to="/gallary"className="nav-link">Gallery</Link>
                <Link to="/feedback"className="nav-link">Feedback</Link>
        </nav>
      </div>
        <div class="nav-right">
            <Link to="/login"><button class="login-btn">Login</button></Link>
            <Link to="/signup"><button class="signup-btn">Sign Up</button></Link>
        </div>
    </header>
  );
}
