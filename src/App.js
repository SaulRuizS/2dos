import './App.css';
import { TodoCounter } from './TodoCounter'
import { TodoSearch } from './TodoSearch'
import { TodoList } from './TodoList'
import { TodoItem } from './TodoItem'
import { CreateTodoButton } from './CreateTodoButton'

const todos = [
  { text: 'First TODO',completed: false,},
  { text: 'Second TODO',completed: false,},
  { text: 'Third TODO',completed: false,},
]

function App() {
  return (
    //The tag below is equal to <React.Fragment>
    <>
      <TodoCounter />
      
      <TodoSearch />
      
      <TodoList>
        {todos.map( (todo) => <TodoItem key={todo.text} text={todo.text} />  )}
        {
        // When rendering a list, to avoid possible problems a "key" will be needed
        // for each element inside the list, this key must be different in each case.
        }
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;
