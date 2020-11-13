import React from 'react';
import Main from './HomePage/Main.js';
import AboutAndSkills from './HomePage/AboutAndSkills';
import Projects from './HomePage/Projects';
import Header from './HomePage/Header';
import Footer from './Footer'

const Home = () => {
    return (
        <div>
            <Header/>
            <Main/>
            <AboutAndSkills/>
            <Projects/>
            <Footer/>
        </div>
    );
};

export default Home;