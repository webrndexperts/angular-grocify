import React from 'react';
import PropTypes from 'prop-types';
import './Portfolios.css';
import { useState, useEffect } from "react";
const Portfolios = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });

  return <h1>I've rendered {count} times!</h1>;
}
Portfolios.propTypes = {};

Portfolios.defaultProps = {};

export default Portfolios;
