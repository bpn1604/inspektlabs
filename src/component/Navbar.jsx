// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import CSS file

function Navbar() {
  return (
    <nav className="navbar"> {/* Apply the "navbar" class */}
      <div className="navbar-container">
        <Link to="/" className="nav-link">Camera</Link> {/* Apply the "nav-link" class */}
        <Link to="/gallery" className="nav-link">Gallery</Link> {/* Apply the "nav-link" class */}
      </div>
    </nav>
  );
}

export default Navbar;
