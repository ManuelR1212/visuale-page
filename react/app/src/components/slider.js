import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/slider.css';

const Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <>
    <div className='slider-container'> 
    <div className="">
      <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} className="slider-image"/>
    </div>

    <div class="">
      <button onClick={handleNext} className="slider-button tab-txt-size-3sm smt-txt-size-1sm b-none round-full">→</button>
    </div>

    </div>   
    </>
  );
};

Slider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Slider;
