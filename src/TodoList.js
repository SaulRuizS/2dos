import React from "react";

function TodoList(props) {
    return(
        // .children appends a child element into a parent element
        <section>
            <ul>
                {props.children}
            </ul>
        </section>
    );
}

export { TodoList }