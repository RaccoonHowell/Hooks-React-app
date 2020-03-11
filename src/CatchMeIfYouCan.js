import React, { useState } from "react";

const CatchMeIfYouCan = ({ jump }) => {
    const [clicked, setClicked] = useState(0);

    const updateClicked = () => setClicked(clicked + 1);

    const style = {
        position: 'absolute',
        top: clicked * jump
    }

    return ( 
        <button 
            className="btn btn-primary" 
            style={ style } onClick={ updateClicked}
        >
            Jump
        </button>
    )
}

export default CatchMeIfYouCan;

// Create a <CatchMeIfYouCan jump={ 100 }> component. It should have a <button> that when clicked moves jump pixels down the screen.