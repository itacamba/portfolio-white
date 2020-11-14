import React from 'react';
import MainBcs from '../../images/bcs-main.mov'
import MainAvanza from '../../images/avanza-main.mov'
import MainCheffed from '../../images/cheffed-main.mov'
import MainPort1 from '../../images/portfolio-main.mov'

import "../css/IndividualProject.css"
import {Link} from 'react-router-dom'


const IndividualProject = ({id, title,demo,github,description, tech}) => {

  
    return (
        <div className="project">
            <h1>{title}</h1>
            
            <div className="project-links">
                {id === 3?
                    <Link to='/portfolio'>DEMO</Link>
                    
                : 
                    <a href={demo} target="_blank" rel="noreferrer">DEMO</a>
                }
                <div className="vertical-line"></div>
                <a href={github} target="_blank" rel="noreferrer">GITHUB</a>
            </div>
            <div className="project-images-container">
                    <div className="main-project-img">
                        {id === 0?
                            <video className="project-video"
                            width="100%"
                            playsInline="on"
                            autoPlay="on"
                            muted="on"
                            loop="on">
                                <source src={MainBcs}/>
                                Your browser does not support HTML video.
                            </video>
                        : id === 1?
                            <video className="project-video"
                            width="100%"
                            playsInline="on"
                            autoPlay="on"
                            muted="on"
                            loop="on">
                                <source src={MainAvanza}/>
                                Your browser does not support HTML video.
                            </video>
                        : id === 2?
                            <video className="project-video"
                            width="100%"
                            playsInline="on"
                            autoPlay="on"
                            muted="on"
                            loop="on">
                                <source src={MainCheffed}/>
                                Your browser does not support HTML video.
                            </video>
                        : id === 3?
                        <video className="project-video"
                        width="100%"
                        playsInline="on"
                        autoPlay="on"
                        muted="on"
                        loop="on">
                            <source src={MainPort1}/>
                            Your browser does not support HTML video.
                        </video>                        
                        :null}
                        
                    </div>

            </div>
            <div className="project-description">
                <div className="project-tech">
                        {tech.map((tech,i) => <p key={i}>{tech}</p>)}
                </div>
                <p>{description}</p>
                {/* <a href="#/" className="project-details-link">Explore</a> // haven't implemented a details page yet */} 
            </div>

        </div>
    );
};

export default IndividualProject;