import React from 'react'
import RegularLogo from '../../Images/AirLogo.svg';
import MobileLogo from '../../Images/RespAirLogo.svg';
import ProfileIcon from '../../Images/Profileicon.svg';
import { BiGlobe } from 'react-icons/bi';
import {IoMdMenu} from 'react-icons/io';
import './Nav.scss';
import SearchButton from './SearchButton';


function Navbar() {


    const click = () => console.log('clicked')

    return (
        <div className="nav-bar">
            <div><img src={RegularLogo} alt="Airbnb logo" height="130vh" width="130vw" id="airbnb-logo"/></div>
            <SearchButton/>
            {/* <div><a href="#">Places to go</a></div>
            <div><a href="#">Experiences</a></div>
            <div><a href="#">Online Experiences</a></div> */}

            <div className="far-right-items">
            <div id="become-host-link"><a href="#"><h4>Become a host</h4></a></div>

            <div id="globe-container"><BiGlobe id="globe-icon"/></div>

            <div id="menu-button-div">
                <div><IoMdMenu id="hamburger-menu"/></div> 
                <div><img src={ProfileIcon} alt="shadow avatar inside of circle" id="profile-icon" height="90px" width="90px"/></div>
            </div>
            </div>
            
            
        </div>
    )
}

export default Navbar
