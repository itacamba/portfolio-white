import React, { useState } from 'react';
import "./css/Navigation.css"

const Navigation = () => {
    // Declare a new state variable, which we'll call "count"
    const [open, setOpen] = useState(false)


    return (
        <div>
            <div id="menu-icon-container" className={open? "change": null} onClick={() => setOpen(!open)}>
                <div className="bar1"></div>
                <div className="invis"></div>
                <div className="bar3"></div>
            </div>
            <nav className={open? 'show' : null}>
                <a href="/#">About</a>
                <a href="/#">Skills</a>
                <a href="/#">Projects</a>
                <a href="/#">Code Challenges</a>
                <a href="/#">Blogs</a>
                <a href="/#">Contact</a>
                <div className="social">
                    <a href="https://www.linkedin.com/in/carla-sahagun/"><i className="fab fa-linkedin-in"></i></a>
                    <a href="https://github.com/itacamba"><i className="fab fa-github"></i></a>
                    <a href="https://medium.com/@daniela.sahagun03"><i className="fab fa-medium-m"></i></a>
                </div>
            </nav>

        </div>
    );
};

export default Navigation;