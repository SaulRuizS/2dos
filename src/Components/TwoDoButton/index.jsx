import React from "react";
import "./TwoDoButton.css"
import { TwoDoContext } from "../TwoDoContext";

function TwoDoButton({ type, toggleShow }) {

    const [TwoDoBtnState, setTwoDoBtnState] = React.useState('');
    const btnType = type;
    const {
        // modalShow,
        setModalShow,
        new2doText,
        setNew2doText,
        addNew2DO,
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
                        // console.log(new2doText());
                        const new2DO = {
                            text: new2doText(),
                            completed: false,
                        }
                        addNew2DO(new2DO);
                        setModalShow(false);
                        setNew2doText('');;
                    }else if(type === 'Reload 2DOs') {
                        window.location.reload();
                        toggleShow(false);
                    }
                }, 200);
            }
        }}>{btnType}</button>
    );
}

export { TwoDoButton } 