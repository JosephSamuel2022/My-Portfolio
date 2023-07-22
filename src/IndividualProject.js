import React from 'react';

const IndividualProject = ({ project, isActive }) => {
  const { title, description, imageUrl, githubLink } = project;

  const handleKnowMoreClick = () => {
    window.open(githubLink, '_blank');
  };

  return (
    <div className={`individual-project ${isActive ? 'active' : ''}`}>
      <img src={imageUrl} alt={title} className="project-image" />
      <div className="project-details">
        <h2>{title}</h2>
        <p>{description}</p>
        <button className="know-more-button" onClick={handleKnowMoreClick}>
          Know More <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

export default IndividualProject;
