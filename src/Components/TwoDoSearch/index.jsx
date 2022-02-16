import React from "react";
import "./TwoDoSearch.css"

function TwoDoSearch({searchValue, setSearchValue}) {
    
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