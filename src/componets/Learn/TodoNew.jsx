const TodoNew = (props) => {
    const { MyFunction } = props;
    MyFunction();

    return (<div className="input-container">
        <input type="text" />
        <button>Add</button>
    </div>);
}

export default TodoNew;