import React from "react";
import "./TwoDoButton.css"

function TwoDoButton({ type }) {

    const [TwoDoBtnState, setTwoDoBtnState] = React.useState('');
    const btnType = type;

    return (
        <button className={`${TwoDoBtnState}`} onClick={() => {
            if(TwoDoBtnState === '') {
                setTwoDoBtnState('pressed');
                setTimeout(() => {
                    setTwoDoBtnState('')
                }, 150);
            }
        }}>{btnType}</button>
    );
}

export { TwoDoButton } 