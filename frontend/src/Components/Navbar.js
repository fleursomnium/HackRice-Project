import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/pain-finder" className="navbar-link">Pain Finder</Link>
        </li>
        <li className="navbar-item">
          <Link to="/about-us" className="navbar-link">About Us</Link>
        </li>
        <li className="navbar-item">
          <Link to="/login" className="navbar-link">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
