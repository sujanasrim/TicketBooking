import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
import websitelogo from './websitelogo.jpg';

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLoginClick = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div>
      <div className="navbar-container">
        <h4 className="navbar-logo">
          <img src={websitelogo} alt="jazzshow" className="navbar-logo-img" />
        </h4>

        <div className="navbar-menu">
          <h4 className="navbar-home">
            <Link to="/Mainpage">Home</Link>
          </h4>
          <h4 className="navbar-login" onClick={handleLoginClick}>Login</h4>
          {showDropdown && (
            <ul className="navbar-dropdown-menu">
              <li><Link to="/AuthenticationPage">Login as Customer</Link></li>
              <li><Link to="/AdminPage">Login as Admin</Link></li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
