import React from 'react';
import SnowyVideo from '../../videos/snowy-house.mp4';
import './GiftCard.scss';
import AirbnbSymbol from '../../Images/RespAirLogo.svg';

function GiftCard() {
    return (
        <div className='flex-gift-card-container'>
            <div className='child-element' id="intro-text-div">
                <div className='gift-card-text'><h3 id="giftcard-opening-quote">Introducing</h3></div>
                <div className='gift-card-text'><h1 id="giftcard-quote">Airbnb gift cards</h1></div>
                {/* <div><h3 id="giftcard-description">Now you have an excuse to kick your spouse, grown child, or sibling out and just tell them its a vacation but we all know what it really is. Time alone.</h3></div> */}
                <div className='gift-card-text'><button id="shop-now-button">Shop now</button></div>
            </div>
            <div className='child-element'>
            <img src={AirbnbSymbol} alt="airbnb triangular symbol" id="logo-image"/>
                <video autoPlay loop muted src={SnowyVideo} type="videos/mp4" id="snowy-video"/>
               
            </div>
        </div>
    )
}

export default GiftCard
