import React from "react";
import { useLocalStorage } from "../useLocalStorage";

const TwoDoContext = React.createContext();

function TwoDoProvider(props) {

    const {
        TwoDos, 
        save2DOs, 
        loading,
        error
    } = useLocalStorage('2DOS_V1', []); //This comes from "useLocalStorage" React Hook.
    
    const [searchValue, setSearchValue] = React.useState('');
    
    // !!TwoDo.completed is equal to TwoDo.completed === true
    const completedCount = TwoDos.filter(TwoDo => !!TwoDo.completed).length;
    const total2DOs = TwoDos.length;
    let searchedTwoDos = []; //Space to save searched 2DOs
    
    if(!searchValue.length >= 1) { 
        //If nothing has been writen in the input, show all 2DOs.
        searchedTwoDos = TwoDos;
    } else {
        searchedTwoDos = TwoDos.filter((TwoDo) => {
            const TwoDoText = TwoDo.text.toLowerCase(); //Avoiding user input issues
            const searchText = searchValue.toLowerCase();
            
            //Filtering every TwoDo that contains the same text introduced by the user.
            return TwoDoText.includes(searchText);
        });
    }
    
    const setCompletedState = (text, completedState) => {
        const TwoDoIndex = TwoDos.findIndex( (TwoDo) => TwoDo.text === text );
        const completed2DOs = [...TwoDos];
        completed2DOs[TwoDoIndex].completed = completedState;
        save2DOs(completed2DOs);
    };
    
    const remove2DO = (text) => {
        const TwoDoIndex = TwoDos.findIndex( (TwoDo) => TwoDo.text === text );
        const new2DOsList = [...TwoDos];
        new2DOsList.splice(TwoDoIndex, 1);
        save2DOs(new2DOsList);
    };
    

    return (
        <TwoDoContext.Provider value={ {
            loading,
            error,
            completedCount,
            total2DOs,
            searchValue,
            setSearchValue,
            searchedTwoDos,
            setCompletedState,
            remove2DO,
        } }>
            {props.children}
        </TwoDoContext.Provider>
    );
}

export { TwoDoContext, TwoDoProvider }