import React from "react";
import "./TodoItem.css";

function TodoItem(props) {

    const [completedState, setCompletedState] = React.useState('pending');
    const completedResponse = false;

    return (

        <li className={`${props.completed && 'completed-text'}`}>
            <span 
                className={`${completedState}`}
                onClick={() => {
                    // props.completed?
                    //     setCompletedState('completed')
                    //     :setCompletedState('pending');
                    if(props.completed) {
                        setCompletedState('pending');
                        completedResponse = false;
                    }
                    else {
                        setCompletedState('completed');
                        completedResponse = true;
                    }
                }}></span>
            <p>{props.text}</p>
            <span className="remove"></span>
        </li>   
    );
}

export { TodoItem }

