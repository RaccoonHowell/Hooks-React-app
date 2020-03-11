import React, { useState } from "react";

const RollCall = ({ names }) => {
    const [index, setIndex] = useState(0);

    const updateIndex = () => setIndex(index < names.length - 1? index + 1 : 0); //  use % index + 1 then line 12 { names [index %]}
    
    return (
        <div class="wrapper">
            <h3>Challenge 7 <span>(RollCall)</span></h3>
            <button onClick={ updateIndex }>Next</button>
            <p>{ names[index] }</p>      
        </div>
    )
}

export default RollCall;

// Create a <RollCall names={ names }> component. It should have a button "Next". When the component first loads it should show the first name in the array. Every time you click "Next" it should show the next name in the array. It should loop back to the beginning.