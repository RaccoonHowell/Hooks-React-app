import React, { useState } from "react";

const RollCall = ({ names }) => {
    const [index, setIndex] = useState(0);

    const updateIndex= () => setIndex(index < names.length - 1? index + 1 : 0);
    
    return (
        <>
            <button className="btn btn-primary" onClick={ updateIndex }>Next</button>
            <p>{ names[index] }</p>      
        </>
    )
}

export default RollCall;

// Create a <RollCall names={ names }> component. It should have a button "Next". When the component first loads it should show the first name in the array. Every time you click "Next" it should show the next name in the array. It should loop back to the beginning.