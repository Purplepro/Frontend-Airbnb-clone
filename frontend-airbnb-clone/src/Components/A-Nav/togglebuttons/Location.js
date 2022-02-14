import React, {useState, useEffect} from 'react'
import '../Expandedbutton.scss';

function Location() {
    const [locationOpen, setLocationOpen] = useState(false);
    const [buttonStyle, setButtonStyle] = useState("location-container")

    
    // const toggle = () => {
    //     setLocationOpen(!locationOpen)
    //     console.log('toggle is connected with props')
    // };

    const changeButtonStyle = () => {
        if(locationOpen) {
            return setButtonStyle('location-container2') //create this className
        } else if(!locationOpen) {
            return setButtonStyle('location-container')
        }
    };


     useEffect(() => {
         changeButtonStyle()
     })

    return (
        <div className={changeButtonStyle} onClick={() => setLocationOpen(!locationOpen)} >
                <label>Location</label>
                <input placeholder='Where are you going?'/>
        </div>
    )
}

export default Location
