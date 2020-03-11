import React, { useState } from "react";

const Die = ({ sides }) => {
    const [side, setSide] = useState("click");

    const updateSide = () => setSide(Math.floor(Math.random() * sides) + 1)

    return (
        <div class="wrapper">
            <h3>Tricksy 2 <span>(Die)</span></h3>
            <button onClick={ updateSide }>{ side }</button>
        </div>
    )
}

export default Die;

// Create a <Die sides={ 6 }> component that shows a random number between 1 and sides whenever you click on it

// Hint: Math.random() generates a random number between 0 and 1. If you multiply the result by, say 100, and then use Math.floor(), you will get a number between 0 and 99.

// let random = Math.random(); // a number between 0 and 1
// let number = Math.floor(random * 100); // a number between 0 and 99