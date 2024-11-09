import { useState } from "react";

const TodoNew = (props) => {
    const { MyFunction } = props;
    MyFunction();

    const [InputValue, SetInputValue] = useState("Thuan");

    const HandleOnClick = () => {
        console.log(InputValue);
    }

    const HandleOnChange = (name) => {
        SetInputValue(name)
    }

    return (<div className="input-container">
        <input type="text" onChange={(event) => HandleOnChange(event.target.value)} />
        <button onClick={HandleOnClick}>Add</button>
        <div>{InputValue}</div>
    </div>);
}

export default TodoNew; 