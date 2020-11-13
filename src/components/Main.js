import React from 'react';
import Carla from "../images/carla-round-portrait.png"
import "../App.css"
import "./css/Main.css"

const Main = () => {
    return (
        <main>
            <div id="round-pic">
                <img src={Carla} alt=""/>
            </div>
            <h3>HELLO, MY NAME IS</h3>
            <h1>Carla Sahagun</h1>
            <p>I am a front-end developer based in Herndon, VA.
                I specialize in building web applications that
                deliver exceptional user experiences.
            </p>
            <a href="#/"><i className="fas fa-chevron-down"></i></a>
        </main>
    );
};

export default Main;