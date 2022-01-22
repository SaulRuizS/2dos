import React from "react";
import "./TodoItem.css";
// import { checkedCount } from "./TodoCounter"

function TodoItem(props) {

    const [checkmarkState, setCheckmarkState] = React.useState('pending');
    const [removeState, setRemoveState] = React.useState('');

    return (
        <li className={`${removeState}`}>
            <span 
                onClick={() => {
                    if(checkmarkState === 'pending') {
                        setCheckmarkState('check');
                        props.checkedCount += 1;
                    }
                    else if(checkmarkState === 'check') {
                        setCheckmarkState('pending');
                        props.checkedCount -= 1;
                    }
                    // console.log(checkedCount)
                }} 
                className={`${checkmarkState}`}
            ></span>
            <p>{props.text}</p>
            <span onClick={() => {
                setRemoveState('removed')
                // props.splice()
            }} className="remove"></span>
        </li>    
    );
}

export { TodoItem }

