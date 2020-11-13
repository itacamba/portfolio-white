import React, {useState} from 'react';
import '../css/AboutAndSkills.css'
import Ada from "../../images/ada-with-diagram.jpg"
import Carla from "../../images/carla-round-portrait.png"
import Resume from "../../images/resume.pdf"

const About = () => {
    const [modalClicked, setModalClicked] = useState(false)

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
                <button className="underline-btn" onClick={() => setModalClicked(!modalClicked)}>Read More +</button>
            </div>
            <div className="max-600-container skills-container">
                <h3>SKILLS</h3>
                <div className="skills">
                    <div className="skills-column">
                        <div><i className="fas fa-caret-right"></i> JavaScript</div>
                        <div><i className="fas fa-caret-right"></i> Ruby</div>
                        <div><i className="fas fa-caret-right"></i> Ruby on Rails</div>
                    </div>
                    <div className="skills-column">
                        <div><i className="fas fa-caret-right"></i> React</div>
                        <div><i className="fas fa-caret-right"></i> HTML5/CSS3</div>
                        <div><i className="fas fa-caret-right"></i> SQL</div>
                    </div>
                </div>
                <a href={Resume} target="_blank" rel="noreferrer" className="underline-btn">Download Resume +</a>
            </div>
            {modalClicked? 
                <div className="modal"  onClick={() => setModalClicked(!modalClicked)}>
                    <div className="modal-cover-img">
                        <img src={Ada} alt="ada_lovelace"/>
                        <div className="modal-round-img">
                            <img src={Carla} alt=""/>
                        </div>
                    </div>
                    <div className="modal-content">
                        <p>
                        <span>Continuation... </span>I needed a career with both technical complexity and 
                        creativity, something that would keep me challenged
                        and constantly learning. I started my web development 
                        journey building a responsive website for my dad’s 
                        small business and since then I have learned to build 
                        full-stack applications with Ruby on Rails and React.
                        </p>
                        <p>
                        From collaborating with other software engineers, pair
                        programming, and screen sharing for the past year I 
                        have a comprehensive knowledge of how web products 
                        translate to business value. Although the hospitality 
                        industry didn’t add enough complexity to my life, it 
                        was a stepping stone to my growth as a developer. 
                        </p>
                        <p>
                        I love to build stuff for the web, and I am currently 
                        looking for a role where I can grow personally and 
                        professionally, where I will be constantly pushed and 
                        challenged and I am looking forward to work with 
                        like-minded people.
                        </p>
                    </div>
                </div>
            : null}
        </div>
    );
};

export default About;