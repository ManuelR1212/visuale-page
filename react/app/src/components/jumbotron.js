import React from 'react';
import PropTypes from 'prop-types';
import '../styles/framework.css';

const Jumbotron = ({ title, description, className }) => {
  return (
    <div className={className}>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

Jumbotron.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    className: PropTypes.string,
  };

export default Jumbotron;
