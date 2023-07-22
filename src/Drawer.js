import './Drawer.css'
import { useState} from 'react';
function Drawer({ isDrawerOpen, toggleDrawer, closeDrawer }) {
  const [activeSection, setActiveSection] = useState('start');

  
  

  const handleScrollToProjects = () => {
    const topElement = document.getElementById('projects');
    topElement.scrollIntoView({ behavior: 'smooth' });
    setActiveSection('projects');
  };

  const handleScrollToTop = () => {
    const topElement = document.getElementById('start');
    topElement.scrollIntoView({ behavior: 'smooth' });
    setActiveSection('start');
  };

  const handleScrollToContact = () => {
    const topElement = document.getElementById('contact');
    topElement.scrollIntoView({ behavior: 'smooth' });
    setActiveSection('contact');
  };

    return (
        <div id="start" className="container">
      <div className={`drawer ${isDrawerOpen ? 'open' : ''}`}>
        {!isDrawerOpen && (
          <button className="drawer-button" onClick={toggleDrawer()}>
             <i className="fas fa-bars"></i>
          </button>
        )}
        {isDrawerOpen && (
          <>
            <button className={`about-button ${activeSection === 'start' ? 'active' : ''}`} onClick={handleScrollToTop}>About Me</button>
            <button className={`project-button ${activeSection === 'projects' ? 'active' : ''}`} onClick={handleScrollToProjects}>Projects</button>
            <button className={`contact-button ${activeSection === 'contact' ? 'active' : ''}`} onClick={handleScrollToContact}>Contact Me</button>
            <button className="close-button" onClick={closeDrawer()}>
            <i className="fas fa-times"></i>
            </button>
          </>
        )}
            </div>
            </div>
    )
}
export default Drawer;