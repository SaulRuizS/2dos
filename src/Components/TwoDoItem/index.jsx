import React from "react";
import "./TwoDoItem.css";

function TodoItem({text, completed, setCompletedState, remove2DO}) {

    const [checkedState, setCheckedState] = React.useState('pending');

    return (

        <li className={`${completed && 'completed-text'}`}>
            <span 
                onClick={() => {
                    if(completed===false) {
                        setCheckedState('completed');
                        setCompletedState(text, true);
                    }
                    else {
                        setCheckedState('pending');
                        setCompletedState(text, false);
                    }
                }}
                className={`${checkedState}`}
            ></span>
            <p>{text}</p>
            <span 
                className="remove"
                onClick={() => {
                    remove2DO(text);
                    // alert('2DO removed');
                }}
            ></span>
        </li>   
    );
}

export { TodoItem }

