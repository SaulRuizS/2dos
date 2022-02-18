import React from "react";
import "./TwoDoButton.css"
import { TwoDoContext } from "../TwoDoContext";

function TwoDoButton({ type }) {

    const [TwoDoBtnState, setTwoDoBtnState] = React.useState('');
    const btnType = type;
    const {
        modalShow,
        setModalShow,
    } = React.useContext(TwoDoContext);

    return (
        <button className={`${TwoDoBtnState}`} onClick={() => {
            if(TwoDoBtnState === '') {
                setTwoDoBtnState('pressed');
                setTimeout(() => {
                    setTwoDoBtnState('')
                    if(type === 'New 2DO'){
                        setModalShow(true);
                    }
                }, 200);
            }

            // else if(type === 'Add 2DO'){
                
            // }
        }}>{btnType}</button>
    );
}

export { TwoDoButton } 