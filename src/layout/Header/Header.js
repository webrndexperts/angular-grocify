import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

import NavBar from '../Navbar/Navbar'
const Header = () => (
  <div className="Header">
   <NavBar/>
  </div>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
