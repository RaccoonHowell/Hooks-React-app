import React, { useState } from "react";

const Square = ({ color }) => {
    const [clicked, setClicked] = useState(false);
 
    const updateClicked = () => setClicked(!clicked);

    const divStyle = {
        backgroundColor: clicked ? color : "lightgreen",
        height: 200,
        width: 200,
    };
    
    return (
        <div class="wrapper">
            <h3>Challenge 2 <span>(Square)</span></h3>
            <div onClick={ updateClicked } style={ divStyle } />
        </div>
    )
  }

  export default Square;

  // Update your <Square colour="hotpink"> component so that the background starts green, but when it is clicked it changes to the passed in colour. It should alternate every time you click.