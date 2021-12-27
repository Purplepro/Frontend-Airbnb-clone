import React from 'react';
import AirbnbPicture from '../../Images/bubble.jpeg';
import './ImFlexible.scss';

function PictureComp() {
    return (
        <div className="airbnb-flexible">
            <div className="imflexible-container">
            <h1>Not sure where to go? Perfect.</h1>
           <a href="#"><button id="flexible-button"><h1 id="im-flexible">I'm flexible</h1></button></a>
           </div>
        </div>
    )
}

export default PictureComp;
