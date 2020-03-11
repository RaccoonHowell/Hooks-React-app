import React, { useState } from "react";

const CatchMeIfYouCan = ({ jump }) => {
    const [clicked, setClicked] = useState(0);

    const updateClicked = () => setClicked(clicked + 1);

    const style = {
        position: 'relative',
        top: clicked * jump
    }

    return (
        <div class="wrapper">
            <h3>Challenge 6 <span>(CatchMeIfYouCan)</span></h3>
            <button style={ style } onClick={ updateClicked}>Jump</button>
        </div>
    )
}

export default CatchMeIfYouCan;

// Create a <CatchMeIfYouCan jump={ 100 }> component. It should have a <button> that when clicked moves jump pixels down the screen.