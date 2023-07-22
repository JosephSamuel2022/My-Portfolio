import React, { useState} from 'react';
import Drawer from './Drawer';
import './App.css';
import Info from './Info';
import Projects from './Projects';
import TechStack from './TechStack';
import Email from './Email';
import ContactMe from './ContactMe';
import BackToTop from './BackToTop';
import AboutMe from './AboutMe';
import Chatbot from './Chatbot';

const App = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);


  const toggleDrawer = () => {
    
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

 
 

  return (
    <div className="overlay-container" >
      
      <div className="overlay">
      <Drawer isDrawerOpen={isDrawerOpen} toggleDrawer={()=>toggleDrawer} closeDrawer={()=>closeDrawer} />

        <div className='background'>
        
          <Info /></div>
      
      <AboutMe/>
        <Projects />
        <TechStack />
        <Chatbot/>
        <Email />
        
        <ContactMe />
          <BackToTop />
        
        </div>
        
        </div>
  );
};

export default App;
