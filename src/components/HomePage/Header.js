import React from 'react';
import Navigation from "../Navigation"
import Logo from "../Logo"
import "../css/Header.css"

const Header = () => {
    return (
        <header>
            <Navigation/>
            <Logo/>
        </header>
    );
};

export default Header;