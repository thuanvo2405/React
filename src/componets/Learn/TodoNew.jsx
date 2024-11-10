import { useState } from "react";

const TodoNew = (props) => {
    const { MyFunction } = props;

    const [InputValue, SetInputValue] = useState("Thuan");

    const HandleOnClick = () => {
        MyFunction(InputValue);
        SetInputValue("");
    }

    const HandleOnChange = (name) => {
        SetInputValue(name)
    }

    return (<div className="input-container">
        <input type="text" onChange={(event) => HandleOnChange(event.target.value)}
            value={InputValue} />
        <button onClick={HandleOnClick}>Add</button>
        <div>{InputValue}</div>
    </div>);
}

export default TodoNew; 