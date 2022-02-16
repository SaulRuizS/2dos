import './App.css';
import React from "react";
import { TwoDoCounter } from '../Components/TwoDoCounter'
import { TwoDoSearch } from '../Components/TwoDoSearch'
import { TwoDoList } from '../Components/TwoDoList'
import { TwoDoItem} from '../Components/TwoDoItem'
import { CreateTwoDoButton } from '../Components/CreateTwoDoButton'
import { TwoDoContext } from '../Components/TwoDoContext'

function AppUI() {

    return (
      //The tag <></> is equal to <React.Fragment><React.Fragment>
      
        <React.Fragment>

          <div className='App'>
            <TwoDoCounter />
    
            <TwoDoSearch />
            
            <TwoDoContext.Consumer>
              {//Here is being called the Provider's "value", where are located all the props we want to use 
                ({
                  error,
                  loading,
                  searchedTwoDos,
                  setCompletedState,
                  remove2DO,
                }) => (
                  <TwoDoList>
                    {error && <p>There was an error...</p>}
                    {loading && <p>Loading, please wait...</p>}
                    {(!loading && !searchedTwoDos.length) && <p>Create your first 2DO!</p>}
          
                    {searchedTwoDos.map( (TwoDo) => 
                      <TwoDoItem 
                        key={TwoDo.text} 
                        text={TwoDo.text} 
                        completed={TwoDo.completed}
                        setCompletedState={setCompletedState}
                        remove2DO={remove2DO}
                      />
                    )}
                    {
                    // When rendering a list, to avoid possible problems a "key" will be needed
                    // for each element inside the list, this key must be different in each case.
                    }
                  </TwoDoList>  
                )}
            </TwoDoContext.Consumer>

            <CreateTwoDoButton />
          </div>
  
        </React.Fragment>
    );
}

export { AppUI }