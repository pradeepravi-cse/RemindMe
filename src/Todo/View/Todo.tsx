import React from "react";
import { connect } from "react-redux";
import { Form } from "../Components/Form/Form";
import { Lists } from "../Components/ListIterator/Lists";
import { addTodo, completeTodo } from "../../store/actions";

function Todo(props) {
  const { todos, addTodo: todoupdate, completeTodo } = props;
  const addTodo = (text: string) => {
    todoupdate(text);
  };
  const updateTodo = e => {
    const { checked, value } = e.target;
    console.log({ id: value, value: checked });
    completeTodo({ id: value, value: checked });
  };

  return (
    <div>
      <div>
        <Form addTodo={addTodo} />
        <Lists data={todos} updateData={updateTodo} />
      </div>
    </div>
  );
}

const mapStatetoProp = state => {
  return { todos: state };
};

export const connectedTodo = connect(mapStatetoProp, { addTodo, completeTodo })(
  Todo
);
