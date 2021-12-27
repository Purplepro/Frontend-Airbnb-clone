import React from 'react';
import './Expandedbutton.scss';

function ExpandedSearchButton() {
    return (
        <div className="search-button-expanded">
            <div className="location-container">
                <label>Location</label>
                <input placeholder='Where are you going?'/>
            </div>
           
            <div className="check-in-container">
                <label>Check in</label>
                <input placeholder='Add dates'/>
            </div>
            
            <div className="check-out-container">
                <label>Check out</label>
                <input placeholder='Add dates'/>
            </div>
           
            <div className="guests-container">
                <div id="guest-label-and-input">
                <label>Guests</label>
                <input placeholder='Add guests'/>
                </div>

                <div>
                    {/* search icon goes here */}
                </div>

            </div>
        </div>
    )
}

export default ExpandedSearchButton
