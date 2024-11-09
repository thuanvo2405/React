import TodoNew from "./componets/Learn/TodoNew"
import "./componets/todo/todo.css"
import ReactLogo from "./assets/react.svg"
import TodoData from "./componets/Learn/TodoData"
import { useState } from "react"
const App = () => {
  const [TodoList, SetTodoList] = useState([
    { id: "1", name: "Learning React" },
    { id: "2", name: "Aim Routine" }
  ]);

  const MyFunction = () => {
  }
  return (
    <div className='todo-container'>
      <div className='todo-title'>Todo List</div>
      <TodoNew MyFunction={MyFunction} />
      <TodoData TodoList={TodoList} />
      <div>
        <img src={ReactLogo} alt="" className="logo" />
      </div>
    </div>
  )
}

export default App
