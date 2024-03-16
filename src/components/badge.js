import React from 'react';
import PropTypes from 'prop-types';

const BadgeComp = ({ content, className }) => {
  return (
    <div>
      <span className={className}>{content}</span>
    </div>
  );
};

BadgeComp.propTypes = {
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default BadgeComp;
