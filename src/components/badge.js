import React from 'react';
import PropTypes from 'prop-types';

const Badge = ({ content, className }) => {
  return (
    <div>
      <span className={className}>{content}</span>
    </div>
  );
};

Badge.propTypes = {
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Badge;
