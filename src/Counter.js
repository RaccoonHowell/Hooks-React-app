import React, { useState } from "react";
import { Button } from "react-bootstrap";

const Counter = ({ initial, max }) => {
    const [counter, setCounter] = useState(initial);
 
    const updateCounterDown= () => setCounter(counter === 0 ? 0 : counter - 1);

    const updateCounterUp= () => setCounter(counter === max ? max :counter + 1);
    
    return (
        <>
            <Button variant="primary" onClick={ updateCounterDown }>-</Button>
            <Button variant="primary" onClick={ updateCounterUp }>+</Button>
            <p>{ counter }</p>      
        </>
    )
}

export default Counter;