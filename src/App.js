import './App.css';
import { TodoCounter } from './TodoCounter'
import { TodoSearch } from './TodoSearch'
import { TodoList } from './TodoList'
import { TodoItem} from './TodoItem'
import { CreateTodoButton } from './CreateTodoButton'

const todos = [
  { text: 'First TODO',completed: false,},
  { text: 'Second TODO',completed: false,},
  { text: 'Third TODO',completed: false,},
]

let checkedCount = 0
let total2DOs = 0

function App() {
  return (
    //The tag below is equal to <React.Fragment>
    <>
      <div className='App'>
        <TodoCounter checkedCount={checkedCount} total2DOs={total2DOs}/>
        
        <TodoList>
          {todos.map( (todo) => <TodoItem key={todo.text} text={todo.text} checkedCount={checkedCount} total2DOs={total2DOs}/>  )}
          {
          // When rendering a list, to avoid possible problems a "key" will be needed
          // for each element inside the list, this key must be different in each case.
          }
        </TodoList>

        <TodoSearch />

        <CreateTodoButton />
      </div>
    </>
  );
}

export default App;
