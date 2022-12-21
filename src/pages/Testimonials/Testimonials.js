import React from 'react';
import PropTypes from 'prop-types';
import './Testimonials.css';

const Testimonials = () => {
  const myVehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
  }
  
  const updateMyVehicle = {
    type: 'car',
    year: 2021, 
    color: 'yellow'
  }
  
  const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}
  return (
  <div className="Testimonials">
    Testimonials Component
  </div>
);
}

Testimonials.propTypes = {};

Testimonials.defaultProps = {};

export default Testimonials;
