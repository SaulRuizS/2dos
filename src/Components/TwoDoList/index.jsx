import React from "react";
import "./TwoDoList.css";

function TwoDoList({
    error, 
    onError, 
    loading,
    onLoading,
    onEmptyTwoDos,
    searchedTwoDos,
    render,
}) {
    return(
        <section>
            <ul>
                {children}
            </ul>
        </section>
    );
}

export { TwoDoList }