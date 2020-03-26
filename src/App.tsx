import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";

import { connectedTodo as Todo } from "./Todo/View/Todo";

export function App() {
  return (
    <Provider store={store}>
      <Todo />
    </Provider>
  );
}
