import React, { useState } from "react";

const ToggleText = ({ initial, alternate }) => {
    const [clicked, setClicked] = useState(false);
 
    const updateClicked = () => setClicked(!clicked);
    
    return (
        <div class="wrapper">
            <h3>Challenge 3 <span>(ToggleText)</span></h3>
            <button onClick={ updateClicked }>Toggle</button>
            <p>{ clicked ?  alternate : initial }</p>
        </div>
    )
}

export default ToggleText;

// Create <ToggleText initial="Hello" alternate="World"> component. It should consist of a <p> and a <button>Toggle</button>. When the <button> is clicked the text of the <p> tag should alternate between initial and alternate