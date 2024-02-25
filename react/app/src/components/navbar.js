import React from 'react';

const NavBar = ({ links, className }) => {
  return (
    <nav>
      <ul className={className}>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.url}>{link.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
