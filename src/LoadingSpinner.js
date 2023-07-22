import React from 'react';
import './LoadingSpinner.css';

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner-container">
      <div className="loading-spinner"></div>
      <div className="loading-text">Generating the result...</div>
      <div className="loading-text">Please be patient as it may take up to a minute.</div>
    </div>
  );
};

export default LoadingSpinner;
