const TodoData = (props) => {
    const { TodoList, HandleClickDelete } = props;

    const DeleteTodo = (id) => {
        HandleClickDelete(id);
    }
    return (<div className="todo-data">
        {TodoList.map((item, index) => {
            return (<div className={`todo-item`} key={item.id}>
                <div>{item.name}</div>
                <button onClick={() => DeleteTodo(item.id)}>Delete</button>
            </div>)
        })}
    </div >);
}

export default TodoData;