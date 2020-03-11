import React, { useState } from "react";

const ToggleText = ({ initial, alternate }) => {
    const [clicked, setClicked] = useState(false);
 
    const updateClicked = () => setClicked(!clicked);
    
    return (
        <>
            <button className="btn btn-primary" onClick={ updateClicked }>Toggle</button>
            <p>{ clicked ?  alternate : initial }</p>
        </>
    )
}

export default ToggleText;

// Create <ToggleText initial="Hello" alternate="World"> component. It should consist of a <p> and a <button>Toggle</button>. When the <button> is clicked the text of the <p> tag should alternate between initial and alternate