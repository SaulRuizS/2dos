import React from "react";
import "./TodoItem.css";

function TodoItem({text, completed, completedState, setCompletedState}) {

    const [checkedState, setCheckedState] = React.useState('pending');
    // const completedResponse = false;

    return (

        <li className={`${completed && 'completed-text'}`}>
            <span 
                className={`${checkedState}`}
                onClick={() => {
                    if(completed===true) {
                        setCheckedState('pending');
                        setCompletedState(false);
                    }
                    else {
                        setCheckedState('completed');
                        setCompletedState(true);
                    }
                    console.log(completedState);
                }}></span>
            <p>{text}</p>
            <span className="remove"></span>
        </li>   
    );
}

export { TodoItem }

