import React from 'react';
import { Link } from 'react-router-dom';
import "./index.scss"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
      </div>
      
    </div>
  );
}

export default Navbar;
    