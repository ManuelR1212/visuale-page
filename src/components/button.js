import React from 'react';
import PropTypes from 'prop-types';

const ButtonComp = ({ btncontent, onClick, className }) => {
  return (
    <button className={className} onClick={onClick}>
      {btncontent}
    </button>
  );
};

ButtonComp.propTypes = {
  btncontent: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default ButtonComp;
