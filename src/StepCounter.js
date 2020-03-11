import React, { useState } from "react";

const StepCounter = ({ max, step }) => {
    const [counter, setCounter] = useState(0);

    const updateCounterDown= () => setCounter(counter === 0 ? 0 : counter - step);

    const updateCounterUp= () => setCounter(counter === max ? max : counter + step);
    
    return (
        <>
            <button className="btn btn-primary" onClick={ updateCounterDown }>-</button>
            <button className="btn btn-primary" onClick={ updateCounterUp }>+</button>
            <p>{ counter }</p>      
        </>
    )
}

export default StepCounter;

// Create a <StepCounter max={ 100 } step={ 5 } /> component. It should consist of a <p> containing a number (start at 0) and two buttons, + and -. When the user clicks the + button, the number should go up by step. When the user clicks the - button the number should go down by step. The number should not be able to go below 0. Use props to pass in a maximum value for the counter.