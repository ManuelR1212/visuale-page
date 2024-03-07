import React, { useState } from 'react';
import '../styles/framework.css';

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <button className={`accordion__button ${isOpen ? 'open' : ''}`} onClick={toggleAccordion}>
        {title}
      </button>
      {isOpen && <div className="accordion__content">{content}</div>}
    </div>
  );
};

export default Accordion;
