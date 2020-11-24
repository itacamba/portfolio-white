import React from 'react';
import Logo from "./images/cs.png"
import Resume from "./carla-resume.pdf"
import Carla from "./images/carla-round-portrait.png"
import XIcon from "./images/x-icon.png"
import BCSMain from "./images/bcs-browser.png"
import BCS1 from "./images/bcs-2.png"
import BCS2 from "./images/bcs-3.png"
import CheffedMain from "./images/cheffed-1.png"
import Cheffed2 from "./images/cheffed-2.png"
import Cheffed3 from "./images/cheffed-3.png"
import Portfolio1 from "./images/portfolio-1.png"
import Portfolio2 from "./images/portfolio-2.png"
import Portfolio3 from "./images/portfolio-3.png"
import WomenInTech from "./images/women-in-tech-blue.png"
import "./OldPortfolio.css"
const OldPortfolio = () => {
    const showPopUp = () =>{
        const popUp = document.querySelector('.demo-pop-up')
        popUp.style.display = "block"
    
        setTimeout(function(){
             popUp.style.display = "none" 
        }, 3000);
    }
    // when mobile menu icon is clicked
    const showMobileMenu = () =>{
        const menu = document.querySelector('.mobile-items')
        menu.style.display = "block"
    }
    //when x icon is clicked
    const hideMobileMenu = () =>{
        const menu = document.querySelector('.mobile-items')
        menu.style.display = "none"
    }


    const showModal = () =>{
        const modalAbout = document.querySelector('#modal-about')
        modalAbout.style.display = "block"
    }

    const hideModal = () =>{
        const modalAbout = document.querySelector('#modal-about')
        modalAbout.style.display = "none"
    }

    return (
<div className="unique-css-portfolio">        
    <div id="main">
        <header id="header">
            <div id="logo">
                <a href="#main"><img src={Logo} alt="logo"/></a>
            </div>
            <nav className="navbar">
                <a href="#about">ABOUT</a>
                <a href="#projects">PROJECTS</a> 
                <a href="#contact">CONTACT</a>
                <a href={Resume} className="theme-btn" target="_blank" rel="noreferrer">RESUME</a>
            </nav>
            <div className="mobile-navbar">
                <div className="menu-icon" onClick={showMobileMenu}>
                    <div id="first-line-menu"></div>
                    <div id="second-line-menu"></div>
                    <div id="third-line-menu"></div>
                </div>
                <div className="mobile-items">
                    <div id="x-icon" onClick={hideMobileMenu}>
                        <img src={XIcon} alt="x-icon"/>
                    </div>
                    <a href="#about">ABOUT</a>
                    <a href="#projects">PROJECTS</a> 
                    <a href="#contact">CONTACT</a>
                    <a href={Resume} target="_blank" rel="noreferrer">RESUME</a>
                </div>
                
            </div>
        </header>
        <div className="hero-content">
            <p>Hi, my name is</p>
            <h1>Carla Sahagun</h1>
            <h2>I am a software developer based in Washington D.C. Metro Area, specializing in building web applications that deliver exceptional user experiences.</h2>
            <a href="#contact" className="theme-btn">CONNECT</a>
        </div>
    </div>

    <div className="background">
        <section  id="about">
            <div className="about-me">
                <div className="section-name">
                    <h1>01</h1>
                    <div className="straight-line"></div>
                    <h1>ABOUT ME</h1>
                </div>

                <h1>My Journey</h1>

                <p>My name is Carla. I am a full-stack software engineer who decided to immerse
                    myself in web development. My first website was created when my dad needed 
                    to build a mobile application for his business. He didn't have the money or 
                    knowledge, so he asked me for help. I did not have any experience building 
                    websites, but that did not deter me from taking on the challenge, a decision
                        that would change my life<span onClick={showModal}>Read More +</span>
                </p>

                <div id="skills">
                    <div className="skills-left">
                        <div className="skill">
                            <p> <i className="fas fa-caret-right"></i>JavaScript</p>
                        </div>
                        <div className="skill">
                            <p> <i className="fas fa-caret-right"></i>HTML5/CSS3</p>
                        </div>
                        <div className="skill">
                            <p> <i className="fas fa-caret-right"></i>Ruby on Rails</p>
                        </div>
                    </div>
                    <div className="skills-right">
                        <div className="skill">
                            <p> <i className="fas fa-caret-right"></i>React</p>
                        </div>
                        <div className="skill">
                            <p> <i className="fas fa-caret-right"></i>Ruby</p>
                        </div>
                        <div className="skill">
                            <p> <i className="fas fa-caret-right"></i>SQL</p>
                        </div>
                    </div> 
                </div>

                <a href={Resume} target="_blank" rel="noreferrer" className="theme-btn">RESUME</a>
            
            </div>
            <div className="my-picture">
                <img src={Carla} alt="carla_portrait"/>
            </div>
        </section>
    </div>

    <div id="modal-about">
        <div id="modal-card">
            <div className="modal-x" onClick={hideModal}>
                <i className="far fa-times-circle"></i>
            </div>
            <a href={Resume} target="_blank" rel="noreferrer" className="modal-btn">RESUME</a>
            <div className="modal-img">
                <img src={Carla} alt="carla-portrait" />
            </div>
            <div className="modal-content-port-1">   
                <p>
                    After spending all of my spare time implementing the website, I quickly 
                    learned how much I enjoyed the challenges that come with building a 
                    website and decided to invest in the training necessary to pursue a 
                    career in software engineering.
                    I enrolled in Flatiron School's software engineering immersive certificate
                    program, which I completed this year. The program included classes that
                    teach the student how to build full-stack applications. The technologies
                    that we learned include Javascript, React, Ruby, Ruby on Rails, and how
                    to leverage APIs.
                </p>
                <p>
                    I am energetic, persistent, and a team player, never afraid 
                    to get out of my comfort zone. I am open to new challenges
                    and ready to learn new technologies. I am eager to deal with 
                    new projects and tasks, connect with people, and work with other
                    like-minded professionals.
                </p>
            </div>
        </div>
    </div>

    <div id="opportunity">
        <h1>Currently Seeking New Opportunities</h1>
    </div>
    <div className="women-programming"> </div>

    <section id="projects" >
        <div className="section-name">
            <h1>02</h1>
            <div className="straight-line"></div>
            <h1>MY PROJECTS</h1>
        </div>

        <h1>What I've Built</h1>
        <p>The following projects have been built on a two week sprint starting from an idea to a wireframe and final product.</p>
        
        <div id="projects-container">

            <div className="project">
                <div className="carousel">
                    <button className="carousel__button carousel__button--left">
                        <i className="fas fa-chevron-left"></i>
                    </button>
                    <div className="carousel__track-container">
                        <ul className="carousel__track">
                            <li className="carousel__slide current-slide">
                                <img className="carousel__image" src={BCSMain} alt="project_img"/>
                            </li>
                            <li className="carousel__slide">
                                <img className="carousel__image" src={BCS1} alt="project_img"/>
                            </li>
                            <li className="carousel__slide">
                                <img className="carousel__image" src={BCS2} alt="project_img"/>
                            </li>
                        </ul>
                    </div>
                    <button className="carousel__button carousel__button--right">
                        <i className="fas fa-chevron-right"></i>
                    </button>
                </div>
                
                <div className="project-content">
                    <p>Featured Project</p>
                    <h1>Business Cyber Shield</h1>
                    <h2>Fully responsive single page application showcasing cybersecurity services, allowing users send a request for more information via email.</h2>
                    <div className="tech-used">
                        <p>React</p>
                        <p>CSS</p>
                        <p>Email.js</p>
                    </div>
                    <div className="project-icons">
                        <a href="https://github.com/itacamba/bcs-netlify-test" target="_blank"rel="noreferrer" ><i className="fab fa-github"></i></a>
                        <a href="https://www.bcybershield.com/" target="_blank" rel="noreferrer"><i className="fas fa-external-link-alt"></i></a>
                    </div>
                </div>

            </div>

            <div className="project">
                
                <div className="project-content">
                    <p>Featured Project</p>
                    <h1>Cheffed - Full Stack</h1>
                    <h2>Platform built for food enthusiasts to showcase their specialty dishes and get requests from prospect clients. Featuring a fully functioning search bar.</h2>
                    <div className="tech-used">
                        <p>Ruby on Rails</p>
                        <p>React</p>
                        <p>JSON Tokens</p>
                    </div>
                    <div className="project-icons">
                        <a href="https://github.com/itacamba/cheffed-frontend" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
                        <a href="https://www.youtube.com/watch?v=gMuNcwAQXM0" target="_blank" rel="noreferrer"><i className="fas fa-external-link-alt"></i></a>
                    </div>
                </div>

                <div className="carousel">
                    <button className="carousel__button carousel__button--left btn-2-left">
                        <i className="fas fa-chevron-left"></i>
                    </button>
                    <div className="carousel__track-container">
                        <ul className="carousel__track track-2">
                            <li className="carousel__slide current-slide-2">
                                <img className="carousel__image" src={CheffedMain} alt="project_img"/>
                            </li>
                            <li className="carousel__slide">
                                <img className="carousel__image" src={Cheffed2} alt="project_img"/>
                            </li>
                            <li className="carousel__slide">
                                <img className="carousel__image" src={Cheffed3} alt="project_img"/>
                            </li>
                        </ul>
                    </div>
                    <button className="carousel__button carousel__button--right btn-2-right">
                        <i className="fas fa-chevron-right"></i>
                    </button>
                    
                </div>


            </div>


            <div className="project">
                
                <div className="carousel">
                    <button className="carousel__button carousel__button--left btn-3-left">
                        <i className="fas fa-chevron-left"></i>
                    </button>
                    <div className="carousel__track-container">
                        <ul className="carousel__track track-3">
                            <li className="carousel__slide current-slide-3">
                                <img className="carousel__image" src={Portfolio1} alt="project_img"/>
                            </li>
                            <li className="carousel__slide">
                                <img className="carousel__image" src={Portfolio2} alt="project_img"/>
                            </li>
                            <li className="carousel__slide">
                                <img className="carousel__image" src={Portfolio3} alt="project_img"/>
                            </li>
                        </ul>
                    </div>
                    <button className="carousel__button carousel__button--right btn-3-right">
                        <i className="fas fa-chevron-right"></i>
                    </button>
                    
                </div>

                <div className="project-content">
                    <p>Featured Project</p>
                    <h1>Portfolio Version 0</h1>
                    <h2>Personal Website presenting some of my projects, background and skills. Built originally with HTML, CSS and JavaScript</h2>
                    <div className="tech-used">
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>JavaScript</p>
                    </div>
                    <div className="project-icons">
                        <a href="https://github.com/itacamba/portfolio-v2" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
                        <a href="#/" onClick={showPopUp}><i className="fas fa-external-link-alt"></i></a>
                    </div>
                </div>
            </div>

        </div>
    </section>


    <section id="freelance">
        <img src={WomenInTech} alt="women_in_tech"/>
        <div className="freelance-content">
            <h1>I am available for freelancing</h1>
            <p>If you are looking to start project, or just need to accelerate the completion of one, contact me. Let's build something great!</p>
            <div className="hire-me">
                <a href="#contact" className="theme-btn">WORK WITH ME</a>
            </div>  
        </div>
    </section>

   <section id="contact">
       <h1>Get in Touch.</h1>
       <p>Have a project in mind or just want to say hi?
        Feel free to send me a message.</p>
        <div id="form">
            <form method="POST">
                <label>Name</label>
                <input type="text" name="name" className="input-field" required/>
                <label>E-mail</label>
                <input type="email" name="email" className="input-field" required/>
                <label>Message</label>
                <textarea name="message" required></textarea>
                <input type="submit" value="SEND MESSAGE" />
            </form>

        </div>
        <div className="social">
            <a href="https://www.linkedin.com/in/carla-sahagun" target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/itacamba" target="_blank" rel="noreferrer">
                <i className="fab fa-github"></i>
            </a>
            <a href="https://medium.com/@daniela.sahagun03" target="_blank" rel="noreferrer">
                <i className="fab fa-medium-m"></i>
            </a>
        </div>
        <div className="divider"></div>
        <p id="copyright">Designed & Built by Carla Sahagun © 2020</p>
   </section>
    <div className="to-top">
            <a href="#main"><i className="fas fa-angle-up"></i></a>
    </div>
    <div className="demo-pop-up">
        <h1>This site is yet to be deployed</h1>
    </div>
</div>
    );
};

export default OldPortfolio;