import React from "react";
import "./TwoDoCounter.css"

function TwoDoCounter({completedCount, total2DOs}) {
    return (
        <>
            <h1>2DOs</h1>
            <h2>You have completed {completedCount} of {total2DOs} 2DOs</h2>
        </>
    );
}

export { TwoDoCounter } 
//This way of exporting, force you to import the function by its name