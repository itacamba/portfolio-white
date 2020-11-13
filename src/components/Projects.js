import React from 'react';
import IndividualProject from './IndividualProject';
import "../App.css"
import "./css/Projects.css"
const Projects = () => {
    const projects = [
        {
         title: "Business Cyber Shield",
         demo: "https://www.bcybershield.com/"  ,
         github: "https://github.com/itacamba/bcs-netlify-test" ,
         description: "Single page web application created for a cybersecurity startup, allows users to send secure emails to request for more information.",
         tech: ['React.js','Email.js', 'CSS'],
         details: "link" // link to details page not developed yet
        },
        {
         title: "Avanza Digital",
         demo: "https://www.avanza.marketing/"  ,
         github: "https://github.com/itacamba/avanza" ,
         description: "Landing page for a digital agency to help small businesses with their online presence.",
         tech: ['HTML', 'CSS', 'PHP', 'Ajax'],
         detailsPage: "link" //link to details page not developed yet
        },
        {
         title: "Cheffed",
         demo: "https://www.youtube.com/watch?v=gMuNcwAQXM0"  ,
         github: "https://github.com/itacamba/cheffed-backend" ,
         description: "Single page web application created for a cybersecurity startup, allows users to send secure emails to request for more information.",
         tech: ['Ruby on Rails', 'React.js', 'HTTP', 'REST', 'API'],
         detailsPage: "link" //link to details page not developed yet
        },
        {
         title: "Portfolio Version 1",
         demo: "not ready"  ,
         github: "https://github.com/itacamba/portfolio-v2" ,
         description: "My first dev portfolio ever launched, showcasing my projects and passion for web development.",
         tech: ['HTML','CSS','JavaScript','PHP'],
         detailsPage: "link" //link to details page not developed yet
        }
    ]
    return (
        <div className="max-600-container" id="projects">
            <h3>TECHNICAL PROJECTS</h3>
            {projects.map((project,i) => 
            <IndividualProject key={i}
                id={i}
                title={project.title}
                demo={project.demo}
                github={project.github}
                description={project.description}
                tech={project.tech}
             />)}
        </div>
    );
};

export default Projects;