import React from "react";

function withStorageListener(WrappedComponent) {
    return function WrappedComponentWithStorageListener(props) {
        const [storageChange, setStorageChange] = React.useState(false);

        window.addEventListener('storage', (change) => {
            if(change.key === '2DOS_V1') {
                console.log('There was a change in the storage');
                setStorageChange(true);
            }
        })

        return (
            <WrappedComponent
                show={storageChange}
                toggleShow={setStorageChange}
            />
        )
    }
}

export { withStorageListener }