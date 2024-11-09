import TodoNew from "./componets/Learn/TodoNew"
import "./componets/todo/todo.css"
import ReactLogo from "./assets/react.svg"
import TodoData from "./componets/Learn/TodoData"
const App = () => {
  const name = "Thuan";
  const age = 21;
  const aim = {
    name: "Intern",
    time: "1-2-2025"
  }

  const MyFunction = () => {
    alert("Hi");
  }
  return (
    <div className='todo-container'>
      <div className='todo-title'>Todo List</div>
      <TodoNew MyFunction={MyFunction} />
      <TodoData name={name} age={age} aim={aim} />
      <div>
        <img src={ReactLogo} alt="" className="logo" />
      </div>
    </div>
  )
}

export default App
