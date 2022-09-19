import { useState } from "react";

import Card from "./card";
import "./todo.css";

const Todo = (props) => {
  const [todoInput, setTodoInput] = useState("");
  const onChangeHandler = (event) => {
    setTodoInput(event.target.value);
  };
  const onClickHandler = () => {
    setTodoInput("");
    props.add(todoInput);
  };
  const CardOnClickHandler = (id) => {
    props.changeStatus(id);
  };
  return (
    <div className="container">
      <div className="input">
        <input type="text" value={todoInput} onChange={onChangeHandler} />
        <button onClick={onClickHandler}>Add</button>
      </div>
      <div className="list">
        {props.todos.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            title={item.title}
            isComplete={item.isComplete}
            changeCompletion={CardOnClickHandler}
          />
        ))}
      </div>
    </div>
  );
};
export default Todo;
