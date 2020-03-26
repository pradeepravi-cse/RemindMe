import { ADD_TODO, COMPLETE_TODO } from "./actionTypes";

const initialState = {};

export default function(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case ADD_TODO: {
      const { id, content } = action.payload;
      return {
        ...state,
        [id]: { text: content, completed: false }
      };
    }
    case COMPLETE_TODO: {
      const { id, value } = action.payload;
      console.log(action.payload);
      return {
        ...state,
        [id]: {
          ...state[id],
          completed: value
        }
      };
    }
    default: {
      return state;
    }
  }
}
