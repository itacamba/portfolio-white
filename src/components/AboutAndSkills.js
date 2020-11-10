import React from 'react';
import './css/AboutAndSkills.css'

const About = () => {
    return (
        <div id="about-skills-section">
            <div className="max-600-container">
                <h3>ABOUT ME </h3>
                <h1>My Journey.</h1>
                <p>I am Carla. I became passionate about web development when I 
                started my search for happiness. Being an immigrant, who has 
                worked in the hospitality industry for the past two years I caught
                myself feeling as if something was missing. I came across a book
                called  ‘Flow’ by ‘Mihaly Csikszentmihalyi‘ which states that the
                best moments usually occur when a person’s body or mind is stretched
                to its limits in a voluntary effort to accomplish something 
                difficult and worthwhile. 
                </p>
                <button>Read More &gt;&gt;</button>
            </div>
            <div className="max-600-container skills-container">
                <h3>SKILLS</h3>
                <div className="skills">
                    <div className="skills-column">
                        <div><i class="fas fa-caret-right"></i> JavaScript</div>
                        <div><i class="fas fa-caret-right"></i> Ruby</div>
                        <div><i class="fas fa-caret-right"></i> Ruby on Rails</div>
                    </div>
                    <div className="skills-column">
                        <div><i class="fas fa-caret-right"></i> React</div>
                        <div><i class="fas fa-caret-right"></i> HTML5/CSS3</div>
                        <div><i class="fas fa-caret-right"></i> SQL</div>
                    </div>
                </div>
                {/* <a href="" >DOWNLOAD RESUME</a> */}
            </div>

        </div>
    );
};

export default About;