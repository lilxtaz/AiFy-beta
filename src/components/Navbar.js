import {FaBars, FaTimes} from "react-icons/fa"
import React, {useRef}from 'react'
import "../styles/styles.css"
import logo from '../images/logo.png';

function Navbar(){

    const navRef = useRef();

    const showNavbar = ()=>{

        navRef.current.classList.toggle("responsive_nav");

    }

    return (<header>

        <div className="container-logo"><img src={logo} className="logo" alt="logo" width="60" height="60" ></img></div>
        <nav ref={navRef}>

            <a href="/#home">Home</a>
            <a href="/#download">Download</a>
            <a href="/#about">About</a>
            <button className="nav-btn nav-close-btn" onClick={showNavbar}>

                <FaTimes />

            </button>

        </nav>

        <button className="nav-btn" onClick={showNavbar}>

            <FaBars />

        </button>

    </header>);

}

export default Navbar;