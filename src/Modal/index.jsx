import './Modal.css';
import React from "react";
import ReactDOM from "react-dom";
import { TwoDoContext } from "../Components/TwoDoContext";
import { TwoDoButton } from "../Components/TwoDoButton";

function Modal({ children }) {

    const ModalWindow = document.getElementById('modal');
    const {
        modalShow,
        setModalShow,
    } = React.useContext(TwoDoContext);

    (modalShow)?
        ModalWindow.style.visibility = 'visible'
        :ModalWindow.style.visibility = 'hidden';

    return ReactDOM.createPortal(
        
        <div className='modal__window'>
            <span 
                className='close-btn'
                onClick={() => {
                    setModalShow(false)
                }}>
            </span>
            <textarea 
                className='modal__input' 
                placeholder='Write a New 2DO!'
            />
            <TwoDoButton 
                type={'Add 2DO'}
            /> {/*Add 2DO Button*/}

            {/* 
            <form>
              <input type="text" placeholder='Write a New 2DO!'/>
              <TwoDoButton 
                type={'Add 2DO'}
              /> //Add 2DO Button
              </form> 
            */}

        </div>,
        ModalWindow
    );
}

export { Modal }