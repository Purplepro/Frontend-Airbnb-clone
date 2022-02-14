import React from 'react'
import RegularLogo from '../../Images/AirLogo.svg';
import WhiteLogo from '../../Images/AirLogoWhite.svg';
import MobileLogo from '../../Images/RespAirLogo.svg';
import ProfileIcon from '../../Images/Profileicon.svg';
import { BiGlobe } from 'react-icons/bi';
import {IoMdMenu} from 'react-icons/io';
import './Nav.scss';
import SearchButton from './SearchButton';
import { useState, useEffect } from 'react';



function Navbar() {
    const [airbnbLogoColor, setAirbnbLogoColor] = useState(RegularLogo);
    const [navbarColor, setNavbarColor] = useState("nav-bar");
    const [becomeHostColor, setBecomeHostColor] = useState("become-host-link2");
    const [globeColor, setGlobeColor] = useState("globe-icon");

    

    const listenToScrollEvent = () => {
        console.log(window.scrollY);
            if(window.scrollY === 0) {
                
                return (
                setAirbnbLogoColor(WhiteLogo),
                setNavbarColor("nav-bar2"),
                setBecomeHostColor("become-host-link2"),
                setGlobeColor("globe-icon2")
                )
                
            } else if (window.scrollY > 1) {
                return (
                setAirbnbLogoColor(RegularLogo),
                setNavbarColor("nav-bar"),
                setBecomeHostColor("become-host-link"),
                setGlobeColor("globe-icon")
                )
            }
    }    


    useEffect(() => {
        window.addEventListener('scroll', listenToScrollEvent)


        return () => {
            window.removeEventListener('scroll', listenToScrollEvent)
        }
    }, [])



    

    return (
        <div className={navbarColor}>

            <div className="airbnb-container "><img src={airbnbLogoColor} alt="Airbnb logo" height="120vh" width="120vw" className="airbnb-logo" /></div>
            <SearchButton/>
            {/* <div><a href="#">Places to go</a></div>
            <div><a href="#">Experiences</a></div>
            <div><a href="#">Online Experiences</a></div> */}

            <div className="far-right-items">
            <div className={becomeHostColor}><a href="#"><h4 id='become-host-h1'>Become a Host</h4></a></div>

            <div className="globe-container"><BiGlobe className={globeColor}/></div>

            <div id="menu-button-div">
                <div><IoMdMenu id="hamburger-menu"/></div> 
                <div><img src={ProfileIcon} alt="shadow avatar inside of circle" id="profile-icon" height="90px" width="90px"/></div>
            </div>
            </div>
            
            
        </div>
    )
}

export default Navbar
