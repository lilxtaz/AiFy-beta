import {FaBars, FaTimes} from "react-icons/fa"
import React, {useEffect, useRef, useState}from 'react'
import "../styles/styles.css"
import logo from '../images/logo.png';
import { FlagIcon } from "react-flag-kit";

function Navbar(){

    const [country, setCountry] = useState('');

    useEffect(() => {
        fetch('https://extreme-ip-lookup.com/json/?key=aYQiAaX5GiBJmWdVuUxi')
        .then( res => res.json())
        .then(response => {
          setCountry(response.countryCode);
        })
        .catch((data, status) => {
          console.log('Request failed:', data);
        });
    },[])

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

        <div className="nav-country"><FlagIcon code={country} height="16" width="26" className="nav-country-flag"/><p>{country}</p></div> 
        
        

    </header>);

}

export default Navbar;