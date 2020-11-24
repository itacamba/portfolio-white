import React, { useState, useEffect, useRef} from 'react';
import "./css/Navigation.css"
import { Link } from "react-scroll";

const Navigation = () => {
    // Declare a new state variable, which we'll call "count"
    const [navOpen, setNavOpen] = useState(false)

    // clickable container when mobile menu appears
    const showRightShadow = () => {
        const shadow = document.querySelector('.nav-right-shadow')
        if(!navOpen){
            shadow.style.display = "block"
        } else {
            shadow.style.display = "none"
        }
    }
    // hide-show header on scroll
    const prevScrollY = useRef(0);

    const [goingDown, setGoingDown] = useState(true);
  
    useEffect(() => {
      const handleScroll = () => {
        const currentScrollY = window.scrollY;
        // will hide the navbar only after 400px
        if (prevScrollY.current < currentScrollY && goingDown && currentScrollY > 400) {
          setGoingDown(false);
          const header = document.getElementById("header")
          header.classList.add('hide')
        //   console.log("going down")
        }
        if (prevScrollY.current > currentScrollY && !goingDown) {
          setGoingDown(true);
          const header = document.getElementById("header")
          header.classList.remove('hide')
        //   console.log("going up")

        }
  
        prevScrollY.current = currentScrollY;
        // The following  line of code gives us the Y coordinates
        // console.log(goingDown, currentScrollY);
      };
  
      window.addEventListener("scroll", handleScroll, { passive: true });
  
      return () => window.removeEventListener("scroll", handleScroll);
    }, [goingDown]);

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
            <div className="nav-right-shadow" onClick={() => {setNavOpen(!navOpen); showRightShadow()}}>

            </div>
        </div>
    );
};

export default Navigation;