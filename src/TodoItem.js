import React from "react";
import "./TodoItem.css";
//check
//pending
let checkmark = 'pending'

function TodoItem(props) {
    return (
        <li>
            <span className={`${checkmark}`}></span>
            <p>{props.text}</p>
            <span className="remove"></span>
        </li>    
    );
}

export { TodoItem }

