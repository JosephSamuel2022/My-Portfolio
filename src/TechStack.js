import React from 'react';
import IndividualTechStack from './IndividualTechStack';
import './TechStack.css';

const TechStack = () => {
  const techStacks = [
    { name: 'React', image: 'images/react.png' },
    { name: 'MongoDB', image: 'images/mongodb.png' },
    { name: 'JavaScript', image: 'images/js.png' },
    { name: 'HTML', image: 'images/html.png' },
    { name: 'CSS', image: 'images/css.png' },
    { name: 'Python', image: 'images/python.png' },
    { name: 'Android', image: 'images/androidstudio.png' },
    { name: 'AWS', image: 'images/aws.png' },
    { name: 'IBM Cognos', image: 'images/ibm.png' },
    { name: 'Java', image: 'images/java.png' },
    { name: 'MySQL', image: 'images/mysql.png' },
    { name: 'PHP', image: 'images/php.png' },
  ];

  const rows = [];
  for (let i = 0; i < techStacks.length; i += 6) {
    const rowTechStacks = techStacks.slice(i, i + 6);
    rows.push(rowTechStacks);
  }

  return (
    <div>
      <h1 className="tech-stack-heading">TechStack</h1>
      <div className="tech-stack-container">
        {rows.map((row, rowIndex) => (
          <div className="tech-stack-row" key={rowIndex}>
            {row.map((techStack, index) => (
                <IndividualTechStack ikey={ index} key={index} techStack={techStack} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
