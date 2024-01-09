import React from "react";
import { FaGithub, FaLinkedin, FaCode, FaDownload } from "react-icons/fa";
import "./Info.css";

const Info = () => {
	const githubURL = "https://github.com/JosephSamuel2022";
	const linkedinURL = "https://www.linkedin.com/in/joseph-samuel-m-71a3b320a/";
	const leetcodeURL = "https://leetcode.com/josephsamuelm2021/";

	const handleDownloadResume = () => {
		const anchor = document.createElement("a");

		// Set the attributes for the anchor element
		anchor.href = "/Resume/Joseph Samuel M - Resume.pdf"; // Replace with the actual path to your resume file
		anchor.download = "Joseph Samuel M Resume.pdf"; // Replace with the desired filename for the downloaded file

		// Programmatically click on the anchor element to trigger the download
		anchor.click();
	};

	return (
		<section id='info'>
			<div className='right-half'>
				<div className='content'>
					<h1>
						I am <span className='name'>Joseph Samuel M</span>
					</h1>
					<p className='description'>Intern at Blue Yonder</p>

					<div className='social-icons'>
						<a
							href={githubURL}
							target='_blank'
							rel='noopener noreferrer'
							className='social-icon github'>
							<FaGithub className='social-icon-inner' />
						</a>
						<a
							href={linkedinURL}
							target='_blank'
							rel='noopener noreferrer'
							className='social-icon linkedin'>
							<FaLinkedin className='social-icon-inner' />
						</a>
						<a
							href={leetcodeURL}
							target='_blank'
							rel='noopener noreferrer'
							className='social-icon leetcode'>
							<FaCode className='social-icon-inner' />
						</a>
					</div>
					<button className='download-button' onClick={handleDownloadResume}>
						<FaDownload className='download-icon' />
						Resume
					</button>
				</div>
			</div>
		</section>
	);
};

export default Info;
