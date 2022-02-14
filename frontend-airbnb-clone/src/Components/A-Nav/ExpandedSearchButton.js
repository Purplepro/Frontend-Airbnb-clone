import React from 'react';
import './Expandedbutton.scss';
import Location from './togglebuttons/Location';
import CheckIn from './togglebuttons/CheckIn';
import CheckOut from './togglebuttons/CheckOut';
import Guests from './togglebuttons/Guests';

function ExpandedSearchButton({ locationOpen }) {
    return (
        <div className="search-button-expanded">
            <div>
            <Location toggle={!locationOpen} />
            {/* {locationOpen && (
                <div className='toggled-location-div'>
                    <div>
                        <div><h1>Im Flexible</h1></div>   
                        <div>
                </div>
            )} */}
            </div>
            <CheckIn/>
            <CheckOut/>
            <Guests/>

        </div>
    )
}

export default ExpandedSearchButton
