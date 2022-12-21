import React from 'react';
import PropTypes from 'prop-types';
import './Blogs.css';
function Car(props) {
  return <li>I am a { props.brand }</li>;
}
const Blogs = () => {
  const cars = ['Ford', 'BMW', 'Audi'];
  const myArray = ['apple', 'banana', 'orange'];
  return(
  <div className="Blogs">
   <h1>Who lives in my garage?</h1>
      <ul>
        {cars.map((car) => <Car brand={car} />)}
      </ul>
      <ul>
        { myArray.map((fruit) => <p>{fruit}</p> ) }
      </ul>
  </div>
);
}

Blogs.propTypes = {};

Blogs.defaultProps = {};

export default Blogs;
