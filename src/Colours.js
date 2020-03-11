import React, { useState } from "react";

const Colours = ({ colours }) => {
    const [index, setIndex] = useState(0);

    const updateIndex = () => setIndex(index < colours.length - 1? index + 1 : 0);

    const divStyle = {
        backgroundColor: colours[index],
        height: 200,
        width: 200,
    };

    return (
        <div class="wrapper">
            <h3>Tricksy 1 <span>(Colours)</span></h3>
            <div onClick={ updateIndex } style={ divStyle } />  
        </div> 
    )          
}

export default Colours;

// Create a <Colours colours={ colours }> component. It should display a <div> that's 200×200px. When you click on it, it should cycle background colour through the colours array that you pass in. Here are some nice colours: