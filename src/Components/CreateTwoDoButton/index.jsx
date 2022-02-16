import React from "react";
import "./CreateTwoDoButton.css"

function CreateTwoDoButton() {

    const [addBtnState, setAddBtnState] = React.useState('');

    return (
        <button className={`${addBtnState}`} onClick={() => {
            if(addBtnState === '') {
                setAddBtnState('pressed');
                setTimeout(() => {
                    setAddBtnState('')
                }, 150);
            }
        }}>Add 2DO</button>
    );
}

export { CreateTwoDoButton } 