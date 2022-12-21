import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import './ContactUs.css';

const ContactUs = () =>{
  
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`)
  }
  
  return (
  <div className="ContactUs">
   <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
  </div>
);

}
ContactUs.propTypes = {};

ContactUs.defaultProps = {};

export default ContactUs;
