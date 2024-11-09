import TodoNew from "./componets/Learn/TodoNew"
import "./componets/todo/todo.css"
import ReactLogo from "./assets/react.svg"
import TodoData from "./componets/Learn/TodoData"
const App = () => {

  return (
    <div className='todo-container'>
      <div className='todo-title'>Todo List</div>
      <TodoNew />
      <TodoData />
      <div>
        <img src={ReactLogo} alt="" className="logo" />
      </div>
    </div>
  )
}

export default App
