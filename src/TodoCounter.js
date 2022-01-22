import React from "react";
import "./TodoCounter.css"

function TodoCounter(props) {
    return (
        <>
            <h1>2DOs</h1>
            <h2>You have completed {props.checkedCount} of {props.total2DOs} 2DOs</h2>
        </>
    );
}

export { TodoCounter } 
//This way of exporting, force you to import the function by its name