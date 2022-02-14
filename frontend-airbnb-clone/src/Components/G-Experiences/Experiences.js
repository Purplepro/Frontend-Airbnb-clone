import React from 'react';
import '../G-Experiences/Experiences.scss';

function Experiences() {
    return (
        <div className='experiences-container'>
            <div><h1>Discover Airbnb Experiences</h1></div>
            <div className='things-to-do-cards-container'>
                <div className='div-1'>
                    <h1 className='things-to-do-quote'>Things to do <span>on your trip</span></h1>
                    <button className='white-buttons'>Experiences</button>
                </div>
                <div className='div-2'>
                    <h1 className='things-to-do-quote'>Things to do <span>from home</span></h1>
                    <button className='white-buttons'>Online Experiences</button>
                </div>
            </div>
            <div className='hosting-questions-card'>
                <div>
                <h1>Questions <span>about </span><span>hosting? </span></h1>
                <button className='white-buttons'> Ask a Superhost</button>
                </div>
            </div>
        </div>
    )
}

export default Experiences
