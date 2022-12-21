import React from 'react';
import PropTypes from 'prop-types';
import './About.css';

const About = () => {
  const shoot = (a) => {
    alert(a);
  }
  return (
  <div className="About">
   <button onClick={() => shoot("Goal!")}>Take the shot!</button>
  </div>
);
}

About.propTypes = {};

About.defaultProps = {};

export default About;
