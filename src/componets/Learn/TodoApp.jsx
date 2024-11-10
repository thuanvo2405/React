import TodoNew from "./TodoNew"
import TodoData from "./TodoData"
import ReactLogo from "../../assets/react.svg"
import { useState } from "react"

const TodoApp = () => {
    const [TodoList, SetTodoList] = useState([]);

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const HandleClickAdd = (name) => {
        const NewTodo = {
            id: getRandomInt(1, 100000000),
            name: name
        };

        SetTodoList([...TodoList, NewTodo]);
    }

    const HandleClickDelete = (item) => {
        const newList = TodoList.filter((value) => (value.id !== item));

        SetTodoList(newList);
    }

    return (<div className='todo-container'>
        <div className='todo-title'>Todo List</div>
        <TodoNew MyFunction={HandleClickAdd} />
        {TodoList.length > 0
            ? <TodoData TodoList={TodoList} HandleClickDelete={HandleClickDelete} /> :
            <div>
                <img src={ReactLogo} alt="" className="logo" />
            </div>
        }
    </div>);
}

export default TodoApp;