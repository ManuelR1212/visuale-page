import React, { useState, useEffect } from 'react';
import '../styles/framework.css';

const Modal = ({ isOpen, onClose, children }) => {
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
        <div className="modal-content">
          <button className="close-button" onClick={closeModal}>
            &times;
          </button>
          {children}
        </div>
      </div>
    );
  };

export default Modal;
