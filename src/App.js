import React, { useEffect, useState } from "react";
import Drawer from "./Drawer";
import "./App.css";
import Info from "./Info";
import Projects from "./Projects";
import TechStack from "./TechStack";
import Email from "./Email";
import ContactMe from "./ContactMe";
import BackToTop from "./BackToTop";
import AboutMe from "./AboutMe";
import Chatbot from "./Chatbot";
import { ScrollPosition } from "./components/ScrollPosition";

const App = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const [currentSection, setCurrentSection] = useState("");
  const handleScroll = () => {
    const sections = document.querySelectorAll("section"); // Assuming each section has a 'section' tag, adjust the selector as needed
    const viewPortHeight = window.innerHeight;

    let closestSection = "";
    let closestDistance = viewPortHeight;
    console.log(sections);
    sections.forEach((section) => {
      const { top, bottom } = section.getBoundingClientRect();
      const sectionHeight = bottom - top;
      const sectionCenter = top + sectionHeight / 2;
      const distanceToCenter = Math.abs(sectionCenter - viewPortHeight / 2);
      if (distanceToCenter < closestDistance) {
        closestDistance = distanceToCenter;
        closestSection = section.id; // Assuming each section has an 'id', adjust as needed
      }
    });
    console.log(closestSection);
    setCurrentSection(closestSection);
  };

  useEffect(() => {
    // Set the initial section when the component mounts

    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="overlay-container">
      <div className="overlay" onScroll={handleScroll}>
        <Drawer
          isDrawerOpen={isDrawerOpen}
          toggleDrawer={() => toggleDrawer}
          closeDrawer={() => closeDrawer}
          currentSection={currentSection}
        />
        <div className="background">
          <Info />
        </div>
        <AboutMe />
        <Projects />
        <TechStack />
        <Chatbot />
        <Email />
        <ContactMe />
        <BackToTop />
      </div>
    </div>
  );
};

export default App;
