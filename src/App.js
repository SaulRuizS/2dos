import './App.css';
import { TodoCounter } from './TodoCounter'
import { TodoSearch } from './TodoSearch'
import { TodoList } from './TodoList'
import { TodoItem} from './TodoItem'
import { CreateTodoButton } from './CreateTodoButton'
import React from 'react';

const defaultTodos = [
  { text: 'First TODO',completed: false,},
  { text: 'Second TODO',completed: false,},
  { text: 'Third TODO',completed: false,},
  { text: 'Forth TODO',completed: false,},
  { text: 'Fifth TODO',completed: false,},
  { text: 'n TODO',completed: false,},
]

function App() {

  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  // !!todo.completed is equal to todo.completed === true
  const completedCount = todos.filter(todo => !!todo.completed).length;
  const total2DOs = todos.length;


  return (
    //The tag below is equal to <React.Fragment>
    <>
      <div className='App'>
        <TodoCounter completedCount={completedCount} total2DOs={total2DOs}/>

        <TodoSearch />
        
        <TodoList>
          {todos.map( (todo) => <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
          // {
          //   <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>  
          //   TodoItem.completedResponse?todo.completed=false:todo.completed=true;
          // }
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
