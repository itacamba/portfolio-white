import React from 'react';
import Carla from "./images/carla-round-portrait.png"
import "./css/Main.css"

const Main = () => {
    return (
        <main>
            <div id="round-pic">
                <img src={Carla} alt=""/>
            </div>
            <h3>HELLO, MY NAME IS</h3>
            <h1>Carla Sahagun</h1>
            <p>I am a software developer based in Herndon, VA.<br></br>
                I specialize in building web applications that<br></br>
                deliver exceptional user experiences.
            </p>
            <a href=""><i class="fas fa-chevron-down"></i></a>
        </main>
    );
};

export default Main;