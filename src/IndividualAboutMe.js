import React from 'react';
import './IndividualAboutMe.css';

const IndividualAboutMe = ({ title, description, isActive }) => {
  let icon;
  if (title === 'Nationality') {
    icon = <img src="\images\india.png" alt="India Icon" className="about-me-icon" />;
  } else if (title === 'Education') {
    icon = <img src="\images\annauniv.png" alt="University Icon" className="about-me-icon" />;
  } else if (title === 'Key Language') {
    icon = <img src="\images\english.png" alt="Language Icon" className="about-me-icon" />;
  }

  return (
    <div className={`individual-about-me ${isActive ? 'active' : ''}`}>
      <h2 className="about-me-title">{title}</h2>
      {icon}
      <p className="about-me-description">{description}</p>
    </div>
  );
};

export default IndividualAboutMe;
