import React from 'react';
import PropTypes from 'prop-types';
import './Navbar.css';
import { Link } from "react-router-dom";
const Navbar = () => (
  <div className="Navbar">
   <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/portfolios">Portfolios</Link>
          </li>
          
        </ul>
      </nav>
  </div>
);

Navbar.propTypes = {};

Navbar.defaultProps = {};

export default Navbar;
