import './App.css';
import { TodoCounter } from '../Components/TwoDoCounter'
import { TodoSearch } from '../Components/TwoDoSearch'
import { TodoList } from '../Components/TwoDoList'
import { TodoItem} from '../Components/TwoDoItem'
import { CreateTodoButton } from '../Components/CreateTwoDoButton'
import React from 'react';

// const defaultTodos = [
//   { text: '1 TODO',completed: false,},
//   { text: '2 TODO',completed: false,},
//   { text: '3 TODO',completed: false,},
//   { text: '4 TODO',completed: false,},
//   { text: '5 TODO',completed: false,},
//   { text: '6 TODO',completed: false,},
//   { text: '7 TODO',completed: false,},
//   { text: '8 TODO',completed: false,},
//   { text: '9 TODO',completed: false,},
//   { text: '10 TODO',completed: false,},
//   { text: '11 TODO',completed: false,},
//   { text: '12 TODO',completed: false,},
//   { text: '13 TODO',completed: false,},
//   { text: '14 TODO',completed: false,},
//   { text: '15 TODO',completed: false,},
//   { text: 'n TODO',completed: false,},
// ]


//This is a custom hook for Local Storage
function useLocalStorage(itemName, initialValue) {
  const localStorage2DOs = localStorage.getItem(itemName);
  let parsed2DOs;

  if(!localStorage2DOs) {
    //In case there is no saved data, create a new localStorage
    localStorage.setItem(itemName, JSON.stringify( initialValue ));
    parsed2DOs = initialValue;
  } else {
    parsed2DOs = JSON.parse(localStorage2DOs);
  }

  const [todos, setTodos] = React.useState(parsed2DOs);

  const save2DOs = (todosToSave) => {
    const string2DOs = JSON.stringify(todosToSave);
    localStorage.setItem('2DOS_V1', string2DOs);
    setTodos(todosToSave);
  };

  return [
    todos,
    save2DOs,
  ];
}

function App() {

  // const localStorage2DOs = localStorage.getItem('2DOS_V1');
  // let parsed2DOs;

  // if(!localStorage2DOs) {
  //   //In case there is no saved data, create a new localStorage
  //   localStorage.setItem('2DOS_V1', JSON.stringify( [] ));
  //   parsed2DOs = [];
  // } else {
  //   parsed2DOs = JSON.parse(localStorage2DOs);
  // }

  // const [todos, setTodos] = React.useState(parsed2DOs);

  const [todos, save2DOs] = useLocalStorage('2DOS_V1', []);

  const [searchValue, setSearchValue] = React.useState('');

  // !!todo.completed is equal to todo.completed === true
  const completedCount = todos.filter(todo => !!todo.completed).length;
  const total2DOs = todos.length;

  let searchedTodos = []; //Space to save searched 2DOs

  if(!searchValue.length >= 1) { 
    //If nothing has been writen in the input, show all 2DOs.
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase(); //Avoiding user input issues
      const searchText = searchValue.toLowerCase();

      //Filtering every todo that contains the same text introduced by the user.
      return todoText.includes(searchText);
    });
  }

  // const save2DOs = (todosToSave) => {
  //   const string2DOs = JSON.stringify(todosToSave);
  //   localStorage.setItem('2DOS_V1', string2DOs);
  //   setTodos(todosToSave);
  // };

  const setCompletedState = (text, completedState) => {
    const todoIndex = todos.findIndex( (todo) => todo.text === text );
    const completed2DOs = [...todos];
    completed2DOs[todoIndex].completed = completedState;
    // const currentCompleted2DO = completed2DOs[todoIndex];
    // completed2DOs.splice(todoIndex, 1);
    // completed2DOs.push(currentCompleted2DO);
    save2DOs(completed2DOs);
  };

  const remove2DO = (text) => {
    const todoIndex = todos.findIndex( (todo) => todo.text === text );
    const new2DOsList = [...todos];
    new2DOsList.splice(todoIndex, 1);
    save2DOs(new2DOsList);
  };

  //----------------------------------------------
  //THIS IS JUST AN EXAMPLE OF "useEffect" REACT HOOK
  console.log('useEffect has not been activated');

  React.useEffect(() => {
    console.log('useEffect is activated');
  }, [total2DOs]);

  console.log('useEffect already activated');
  //----------------------------------------------

  return (
    //The tag below is equal to <React.Fragment>
    <>
      <div className='App'>
        <TodoCounter completedCount={completedCount} total2DOs={total2DOs}/>

        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
        
        <TodoList>
          {searchedTodos.map( (todo) => 
            <TodoItem 
              key={todo.text} 
              text={todo.text} 
              completed={todo.completed}
              setCompletedState={setCompletedState}
              remove2DO={remove2DO}
            />
          )}
          {
          // When rendering a list, to avoid possible problems a "key" will be needed
          // for each element inside the list, this key must be different in each case.
          }
        </TodoList>

        <CreateTodoButton />
      </div>
    </>
  );
}

export default App;
