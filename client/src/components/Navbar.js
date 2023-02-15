import {FaBars, FaTimes} from "react-icons/fa"
import React, {useEffect, useRef, useState}from 'react'
import "../styles/styles.css"
import logo from '../images/logo.png';
import { FlagIcon } from "react-flag-kit";
import { Link } from "react-router-dom";
import * as BiIcons from 'react-icons/bi'


function Navbar(){

    const [country, setCountry] = useState('');
    const [chevron, setChevron] = useState(false);

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
        setChevron(!chevron);

    }

    return (<header>

        <div className="container-logo"><Link to={'/'}><img src={logo} className="logo" alt="logo" width="60" height="60" ></img></Link></div>
        <nav ref={navRef}>
 
            <a href="/#about"><Link to={'/home'}>Home{(chevron&&<BiIcons.BiChevronRight className="nav-chevron"/>)}</Link></a>
            <a href="/#about"><Link to={'/get-started'}>Get Started{(chevron&&<BiIcons.BiChevronRight className="nav-chevron"/>)}</Link></a>
            <a href="/#about"><Link to={'/about'}>About{(chevron&&<BiIcons.BiChevronRight className="nav-chevron"/>)}</Link></a>
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