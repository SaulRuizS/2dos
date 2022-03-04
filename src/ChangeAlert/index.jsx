import './storageChange.css'
import React from "react";
import ReactDOM from "react-dom";
import { withStorageListener } from "./withStorageListener";
import { TwoDoButton } from "../Components/TwoDoButton";

function ChangeAlert({ show, toggleShow }) {

    const StorageChange = document.getElementById('storageChange');

    (show)?
        StorageChange.style.visibility = 'visible'
        :StorageChange.style.visibility = 'hidden';

    return ReactDOM.createPortal(
        <div className='storageChange__window'>
            <p>There are changes in your 2DOs</p>

            <TwoDoButton
                type={'Reload 2DOs'}
                toggleShow={toggleShow}
            />
        </div>
        ,StorageChange
    );
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener }