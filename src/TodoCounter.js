import React from "react";
import "./TodoCounter.css"

let todoCount = 0
let total2DOs = 0

function TodoCounter() {
    return (
        <>
            <h1>2DOs</h1>
            <h2>You have completed {todoCount} of {total2DOs} 2DOs</h2>
        </>
    );
}

export { TodoCounter } 
//This way of exporting, force you to import the function by its name