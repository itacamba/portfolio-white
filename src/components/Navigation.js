import React, { useState } from 'react';
import "./css/Navigation.css"
import { Link, animateScroll as scroll } from "react-scroll";

const Navigation = () => {
    // Declare a new state variable, which we'll call "count"
    const [navOpen, setNavOpen] = useState(false)

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    const showRightShadow = () => {
        const shadow = document.querySelector('.nav-right-shadow'),
              icon = document.querySelector('#menu-icon-container')
        if(!navOpen){
            shadow.style.display = "block"
            icon.style.background = "none"
        } else {
            shadow.style.display = "none"
            icon.style.background = "white"
        }
        
    }

    return (
        <div>
            <div id="menu-icon-container" className={navOpen? "change": null} onClick={() => {setNavOpen(!navOpen); showRightShadow()}}>
                <div className="bar1"></div>
                <div className="invis"></div>
                <div className="bar3"></div>
            </div>
            <nav className={navOpen? 'show' : null}>
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
            <div className="nav-right-shadow" onClick={() => {setNavOpen(!navOpen); showRightShadow()}}>

            </div>
        </div>
    );
};

export default Navigation;