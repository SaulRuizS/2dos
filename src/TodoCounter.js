import React from "react";
import "./TodoCounter.css"

let checkedCount = 0
let total2DOs = 0

function TodoCounter() {
    return (
        <>
            <h1>2DOs</h1>
            <h2>You have completed {checkedCount} of {total2DOs} 2DOs</h2>
        </>
    );
}

export { TodoCounter, checkedCount } 
//This way of exporting, force you to import the function by its name