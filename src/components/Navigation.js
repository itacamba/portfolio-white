import React, { useState } from 'react';
import "./css/Navigation.css"
import { Link, animateScroll as scroll } from "react-scroll";

const Navigation = () => {
    // Declare a new state variable, which we'll call "count"
    const [open, setOpen] = useState(false)

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return (
        <div>
            <div id="menu-icon-container" className={open? "change": null} onClick={() => setOpen(!open)}>
                <div className="bar1"></div>
                <div className="invis"></div>
                <div className="bar3"></div>
            </div>
            <nav className={open? 'show' : null}>
                <Link
                    activeClass="active"
                    to="about-skills-section"
                    spy={true}
                    smooth={true}
                    duration={500}
                >About & Skills</Link>
                <Link
                    activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    duration={500}
                >Projects</Link>
                <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    duration={500}
                >Contact</Link>
                <div className="social">
                    <a href="https://www.linkedin.com/in/carla-sahagun/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
                    <a href="https://github.com/itacamba" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
                    <a href="https://medium.com/@daniela.sahagun03" target="_blank" rel="noreferrer"><i className="fab fa-medium-m"></i></a>
                </div>
            </nav>
            <div className="to-top-btn" onClick={scrollToTop}>
                <i className="fas fa-arrow-up"></i>
            </div>
        </div>
    );
};

export default Navigation;