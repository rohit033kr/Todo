import { useState } from "react";

export default function Todo() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  function onInputChange(event) {
    setInput(event.target.value);
  }

  function onAdd() {
    setTodos([...todos, input]);
    setInput("");
    console.log(todos);
  }

  return (
    <div className="bg-success">
      <h1 className="text-light ">ToDo</h1>

      <input
        type="text"
        placeholder="add a task"
        onChange={onInputChange}
        value={input}
      />
      <button onClick={onAdd}>Add Task</button>

      {todos.map((list) => (
        <li className="text-light"> {list}</li>
      ))}
    </div>
  );
}