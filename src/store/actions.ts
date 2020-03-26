import { ADD_TODO, COMPLETE_TODO } from "./actionTypes";

let nextTodoId = 0;

export const addTodo = content => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    content
  }
});

export const completeTodo = content => ({
  type: COMPLETE_TODO,
  payload: {
    id: content.id,
    value: content.value
  }
});
