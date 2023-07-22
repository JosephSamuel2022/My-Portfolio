import React from 'react';
import IndividualAboutMe from './IndividualAboutMe';
import './AboutMe.css';

const AboutMe = () => {
  const aboutMeData = [
    {
      id: 1,
      title: 'Nationality',
      description: "Indian",
    },
    {
      id: 2,
      title: 'Education',
      description: 'Anna University',
    },
    {
      id: 3,
      title: 'Key Language',
      description: 'English',
    },
  ];

  return (
    <div id="about-me">
      <h2 className="about-me-heading">About Me</h2>
      <div className="individual-about-me-container">
        {aboutMeData.map((aboutMe,index) => (
          <IndividualAboutMe
            key={aboutMe.id}
            title={aboutMe.title}
                description={aboutMe.description}
                isActive={index === 1}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutMe;
