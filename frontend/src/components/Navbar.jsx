import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar-box">

    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="navbar-brand">IISC GPT</Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/about" className="nav-link">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-link">Services</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;
