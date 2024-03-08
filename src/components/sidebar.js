import React from 'react';
import PropTypes from 'prop-types';

const Sidebar = ({ items, className }) => {
  return (
    <div>
      <ul className={className}>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

Sidebar.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Sidebar;
