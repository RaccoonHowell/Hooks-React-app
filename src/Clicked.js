import React, { useState } from "react";

const Clicked = () => {
    const [clicked, setClicked] = useState(false);
 
    const updateClicked = () => setClicked(true);
    
    return (
        <div class="wrapper">
            <h3>Challenge 1 <span>(Clicked)</span></h3>
            <p onClick={ updateClicked }>{ clicked ? "Clicked" : "Not clicked" }</p>
        </div>
    )
}

  export default Clicked;

  // Create a <Clicked> component. It should initially display "Not clicked" in a <p>. Once it's been clicked it should change to "Clicked".