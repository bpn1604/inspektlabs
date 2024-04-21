// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

function Navbar() {
  return (
    <nav className="navbar"> 
      <div className="navbar-container">
        <Link to="/" className="nav-link">Camera</Link> 
        <Link to="/gallery" className="nav-link">Gallery</Link>
      </div>
    </nav>
  );
}

export default Navbar;
