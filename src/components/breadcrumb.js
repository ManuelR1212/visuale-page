import React from 'react';
import PropTypes from 'prop-types';
import '../styles/framework.css';

const Breadcrumbs = ({ items, className, classNameLi }) => {
  return (
    <nav className={className}>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.link ? (
              <a href={item.link} className={classNameLi}>{item.label}</a>
            ) : (
              <span>{item.label}</span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

Breadcrumbs.propTypes = {
    className: PropTypes.string,
  };


export default Breadcrumbs;
