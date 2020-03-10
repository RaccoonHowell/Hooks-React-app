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