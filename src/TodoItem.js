import React from "react";
import "./TodoItem.css";
//check
//pending

function TodoItem(props) {
    
    const [checkmarkState, setCheckmarkState] = React.useState('pending');
    const [removeState, setRemoveState] = React.useState(false);
    
    return (
        <li>
            <span 
                onClick={() => {
                    setCheckmarkState('check')
                }} 
                className={`${checkmarkState}`}
            ></span>
            <p>{props.text}</p>
            <span className="remove"></span>
        </li>    
    );
}

export { TodoItem }

