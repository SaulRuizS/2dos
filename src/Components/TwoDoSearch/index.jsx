import React from "react";
import { TwoDoContext } from "../TwoDoContext";
import "./TwoDoSearch.css"

function TwoDoSearch() {

    const {
        searchValue,
        setSearchValue,
    } = React.useContext(TwoDoContext);
    
    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    }

    return(
        <input 
            placeholder='Search a 2DO'
            value={searchValue}
            onChange={onSearchValueChange}
        />
    );
}

export { TwoDoSearch }