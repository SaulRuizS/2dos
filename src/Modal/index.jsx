import './Modal.css';
import React from "react";
import ReactDOM from "react-dom";

function Modal({ children }) {
    return ReactDOM.createPortal(
        <div className='modal__window'>
            <span 
                className='close-btn'
                onClick={() => {
                    document.getElementById('modal').style.visibility = 'hidden';
                }}>
            </span>
            {children}
        </div>,
        document.getElementById('modal')
    );
}

export { Modal }