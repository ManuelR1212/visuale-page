import React, { useState, useEffect } from 'react';
import '../styles/framework.css';
import PropTypes from 'prop-types';

const Modal = ({ isOpen, onClose, content, tittle, className }) => {
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      setIsVisible(isOpen);
    }, [isOpen]);
  
    const closeModal = () => {
      setIsVisible(false);
      onClose();
    };
  
    return (
      <div className={`modal ${isVisible ? 'visible' : ''}`}>
        <div className={`modal-content ${className}`}>
          <button className="close-button" onClick={closeModal}>
            &times;
          </button>
          <h1>{tittle}</h1>
         <span>{content}</span> 
        </div>
      </div>
    );
  };

  Modal.propTypes = {
    content: PropTypes.string.isRequired,
    tittle: PropTypes.string,
    className: PropTypes.string,
  };

export default Modal;
