import React from "react";
import "./TwoDoList.css";

function TwoDoList({
    error, 
    onError, 
    loading,
    onLoading,
    searchedTwoDos,
    onEmptyTwoDos,
    total2DOs,
    onNoSearchResult,
    render,
    // children = this.children,
}) {
    return(
        <section>
            <ul>
                {error && onError()}
                {loading && onLoading()}
                {(!loading && !total2DOs) && onEmptyTwoDos()}
                {(!!total2DOs && !searchedTwoDos.length) && onNoSearchResult()}
                {searchedTwoDos.map(render)}
            </ul>
        </section>
    );
}

export { TwoDoList }