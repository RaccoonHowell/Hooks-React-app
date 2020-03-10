import React, { useState } from "react";

const Square = ({ color }) => {
    const [clicked, setClicked] = useState(false);
 
    const updateClicked = () => setClicked(!clicked);

    const divStyle = {
        backgroundColor: clicked ? color : "green",
        height: 200,
        width: 200,
    };
    
    return <div onClick={ updateClicked } style={ divStyle } />;
  }

  export default Square;