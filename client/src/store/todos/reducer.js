/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
import {
  ADD_TODO,
  CHANGE_TODO,
  REMOVE_TODO,
  SET_TODOS,
  TODOS_CHANGE_ORDER,
} from './types';

const initialState = [];

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TODOS:
      console.log(action.payload);
      return [...state, ...action.payload.todos];
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    case ADD_TODO:
      console.log(action.payload);
      // eslint-disable-next-line no-case-declarations
      const newTodo = {
        title: action.payload.title,
        id: Date.now(),
        completed: false,
        order: Date.now(),
        date: new Date().toLocaleString(),
      };
      return [...state, newTodo];
    case CHANGE_TODO:
      return state.map((todo) => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
    case TODOS_CHANGE_ORDER:
      return state.map((t) => {
        if (t.id === action.payload.todo.id) {
          return { ...t, order: action.payload.currentTodo.order };
        }
        if (t.id === action.payload.currentTodo.id) {
          return { ...t, order: action.payload.todo.order };
        }
        return t;
      });
    default:
      return state;
  }
};
