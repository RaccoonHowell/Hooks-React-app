import React, { useState } from "react";

const Counter = ({ initial, max }) => {
    const [counter, setCounter] = useState(initial);
 
    const updateCounterDown= () => setCounter(counter === 0 ? 0 : counter - 1);

    const updateCounterUp= () => setCounter(counter === max ? max : counter + 1);
    
    return (
        <>
            <button className="btn btn-primary" onClick={ updateCounterDown }>-</button>
            <button className="btn btn-primary" onClick={ updateCounterUp }>+</button>
            <p>{ counter }</p>      
        </>
    )
}

export default Counter;

// Create a <Counter initial={ 50 } max={ 100 } /> component. It should consist of a <p> containing a number (which starts at the initial value) and two buttons, + and -. When the user clicks the + button, the number should go up. When the user clicks the - button the number should go down. The number should not be able to go below 0. Use props to pass in a maximum value for the counter