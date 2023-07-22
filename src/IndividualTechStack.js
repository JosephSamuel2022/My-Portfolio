import React from 'react';
import './TechStack.css'
const IndividualTechStack = ({ikey, techStack }) => {
  return (
      <div className={`individual-tech-stack ${(ikey+1) % 3 === 0 ? 'extra-space' : ''}`}>
          
      <img src={techStack.image} alt={techStack.name} />
    </div>
  );
};

export default IndividualTechStack;
