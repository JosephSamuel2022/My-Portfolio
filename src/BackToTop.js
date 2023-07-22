import React from 'react';
import { FaArrowUp } from 'react-icons/fa';
import './BackToTop.css';

const BackToTop = () => {
    const handleScrollToTop = () => {
        const topElement = document.getElementById('start');
        topElement.scrollIntoView({ behavior: 'smooth' });
      };
      

  return (
    <div className="back-to-top-container" onClick={handleScrollToTop}>
      <FaArrowUp className="arrow-icon" />
      <span className="back-to-top-text" >Back to top</span>
    </div>
  );
};

export default BackToTop;
