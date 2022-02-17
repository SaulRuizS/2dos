import React from "react";
import "./TwoDoItem.css";

function TwoDoItem({text, completed, setCompletedState, remove2DO}) {

    // const [checkedState, setCheckedState] = React.useState('pending');

    return (

        <li className={`${completed && 'completed-text'}`}>
            <span 
                className={`${completed && 'completed'} pending`}
                // className={`${checkedState}`}
                onClick={() => {
                    completed?
                        setCompletedState(text,false)
                        :setCompletedState(text,true);
                }}
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

export { TwoDoItem }

