import React from 'react'
import RegularLogo from '../../Images/AirLogo.svg';
import MobileLogo from '../../Images/RespAirLogo.svg';
import { IoSearch } from 'react-icons/io5';


function Navbar() {


    const click = () => console.log('clicked')

    return (
        <div>
            <div><img src={RegularLogo} alt="Airbnb logo" height="140px" width="140px"/></div>
            <div className="SearchBar">
            <h4>Start your search</h4>
            <div role="button" aria-expanded="false" id="small-search" tabIndex={0} onClick={click}><IoSearch className="search-icon" /></div>
            </div>
            <div><a href="#">Places to go</a></div>
            <div><a href="#">Experiences</a></div>
            <div><a href="#">Online Experiences</a></div>
            
            
        </div>
    )
}

export default Navbar
