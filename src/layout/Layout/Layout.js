import React from 'react';
import PropTypes from 'prop-types';
import './Layout.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer'
import MainContent from '../MainContent/MainContent'
const Layout = () => (
  <div className="Layout">
  <Header/>
  <MainContent/>
  <Footer/>
  </div>
);

Layout.propTypes = {};

Layout.defaultProps = {};

export default Layout;
