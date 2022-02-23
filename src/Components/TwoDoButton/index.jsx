import React from "react";
import "./TwoDoButton.css"
import { TwoDoContext } from "../TwoDoContext";

function TwoDoButton({ type }) {

    const [TwoDoBtnState, setTwoDoBtnState] = React.useState('');
    const btnType = type;
    const {
        modalShow,
        setModalShow,
        new2doText,
        setNew2doText,
    } = React.useContext(TwoDoContext);

    return (
        <button className={`${TwoDoBtnState}`} onClick={() => {

            if(TwoDoBtnState === '') {
                setTwoDoBtnState('pressed');
                setTimeout(() => {
                    setTwoDoBtnState('')
                    if(type === 'New 2DO'){
                        setModalShow(true);
                    }else if(type === 'Add 2DO'){
                        console.log(new2doText());
                        setModalShow(false);
                        setNew2doText('');;
                    }
                }, 200);
            }
        }}>{btnType}</button>
    );
}

export { TwoDoButton } 