import React, { useState } from "react";

const Clicked = () => {
    const [clicked, setClicked] = useState(false);
 
    const updateClicked = () => setClicked(true);
    
    return <p onClick={ updateClicked }>{ clicked ? "Clicked" : "Not clicked" }</p>;
  }

  export default Clicked;

  // Create a <Clicked> component. It should initially display "Not clicked" in a <p>. Once it's been clicked it should change to "Clicked".