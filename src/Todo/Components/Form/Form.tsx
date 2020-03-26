import React from "react";

import "./Form.scss";
interface Props {
  addTodo: (todo: string) => void;
}
export function Form({ addTodo }: Props) {
  const [todo, setTodo] = React.useState<string>("");

  return (
    <form className="form">
      <input
        type="text"
        name="todo"
        onChange={e => setTodo(e.target.value)}
        placeholder="Enter the Todo Item"
        onKeyDown={e => e.keyCode == 13 && e.preventDefault()}
      />

      <input
        type="reset"
        value="Add"
        className="addButton"
        disabled={!todo}
        onClick={() => addTodo(todo)}
      />
    </form>
  );
}
