import React, { useState } from "react";
import IndividualProject from "./IndividualProject";
import "./Projects.css";

const Projects = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const projects = [
		{
			id: 1,
			title: "RESPIRATORY IMBALANCE PREDICTOR",
			description:
				"Advanced Flask and React-powered web app for predicting respiratory imbalances, securely storing patient data, and offering insightful visualizations.",
			imageUrl: "images/hospital.jpg",
			githubLink:
				"https://github.com/JosephSamuel2022/Respiratory-Imbalance-Front-End",
		},
		{
			id: 2,
			title: "ONLINE SHOPPING APPLICATION ",
			description:
				"Implemented user registration, login, shopping, and cart functionality.",
			imageUrl: "images/shopping.png",
			githubLink: "https://github.com/JosephSamuel2022/Shopping_Application",
		},
		{
			id: 3,
			title: "GROUP CHAT WEB APPLICATION",
			description:
				"Group Chat App enables real-time group conversations using React.js and Node.js. Join chat rooms, exchange messages, and connect effortlessly with friends and colleagues.",
			imageUrl: "images/chat.png",
			githubLink: "https://github.com/JosephSamuel2022/Group-Chat",
		},
		{
			id: 4,
			title: "EMPLOYEE PROMOTION & STARTUP CASE STUDY",
			description:
				"Built classification model using decision trees and random forest. Performed EDA with visualizations.",
			imageUrl: "images/employee.png",
			githubLink:
				"https://github.com/JosephSamuel2022/Employee-Promotion-and-Startup-Case-Study",
		},
	];

	const windowSize = 3; // Size of the sliding window

	const handlePrevious = () => {
		setCurrentIndex((prevIndex) => {
			if (prevIndex === 0) {
				return prevIndex;
			} else {
				return prevIndex - 1;
			}
		});
	};

	const handleNext = () => {
		setCurrentIndex((prevIndex) => {
			if (prevIndex >= projects.length - windowSize) {
				return prevIndex;
			} else {
				return prevIndex + 1;
			}
		});
	};

	return (
		<section id='projects'>
			<div id='projects'>
				<h1 className='projects-heading'>Projects</h1>
				<div className='projects-container'>
					<button
						className={`project-nav-button left ${
							currentIndex === 0 ? "disabled" : ""
						}`}
						onClick={handlePrevious}>
						<i className='fas fa-chevron-left'></i>
					</button>
					<div className='project-cards-wrapper'>
						{projects
							.slice(currentIndex, currentIndex + windowSize)
							.map((project, index) => (
								<IndividualProject
									key={project.id}
									project={project}
									isActive={index === Math.floor(windowSize / 2)}
								/>
							))}
					</div>
					<button
						className={`project-nav-button right ${
							currentIndex >= projects.length - windowSize ? "disabled" : ""
						}`}
						onClick={handleNext}>
						<i className='fas fa-chevron-right'></i>
					</button>
				</div>
			</div>
		</section>
	);
};

export default Projects;
