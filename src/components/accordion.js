import React, { useState } from 'react';
import '../styles/framework.css';
import PropTypes from 'prop-types';

const Accordion = ({ title, content, className, classNamebtn, classNamectn}) => {
  const [isOpen, setIsOpen] = useState(false); //Open and close function | Función para abrir y cerrar

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return ( // Return title and content | Retornar título y contenido
    <div className={className}>
      <button className={`accordion__button ${isOpen ? 'open' : ''} ${classNamebtn}`} onClick={toggleAccordion} >
        {title}
      </button>
      {isOpen && <div className={classNamectn}>{content}</div>}
    </div>
  );
};

Accordion.propTypes = {
  content: PropTypes.string.isRequired,
  tittle: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Accordion;
