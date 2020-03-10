import React, { useState } from "react";
import { Button } from "react-bootstrap";

const ToggleText = ({ initial, alternate }) => {
    const [clicked, setClicked] = useState(false);
 
    const updateClicked = () => setClicked(!clicked);
    
    return (
        <>
            <Button variant="primary" onClick={ updateClicked }>Toggle</Button>
            <p>{ clicked ?  alternate : initial }</p>
        </>
    )
  }

export default ToggleText;

// create <ToggleText initial="Hello" alternate="World"> component. It should consist of a <p> and a <button>Toggle</button>. When the <button> is clicked the text of the <p> tag should alternate between initial and alternate.