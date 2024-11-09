const TodoData = (props) => {
    const { TodoList } = props;
    return (<div className="todo-data">
        <div>{JSON.stringify(TodoList)}</div>

    </div>);
}

export default TodoData;