import React from 'react';
import PropTypes from 'prop-types';
import './MainContent.css';
import { Outlet } from "react-router-dom";
const MainContent = () => (
  <div className="MainContent">
    <Outlet />
  </div>
);

MainContent.propTypes = {};

MainContent.defaultProps = {};

export default MainContent;
