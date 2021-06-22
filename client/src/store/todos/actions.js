import getTodos from '../../api/getTodos';
import {
  ADD_TODO,
  CHANGE_TODO,
  REMOVE_TODO,
  SET_TODOS,
  TODOS_CHANGE_ORDER,
} from './types';

export const addTodoAction = (title) => {
  return {
    type: ADD_TODO,
    payload: { title },
  };
};

export const removeTodoAction = (todoId) => {
  return {
    type: REMOVE_TODO,
    payload: todoId,
  };
};

export const onChangeTodoAction = (todoId) => {
  return {
    type: CHANGE_TODO,
    payload: todoId,
  };
};

export const todosChangeOrderAction = (todo, currentTodo) => {
  return {
    type: TODOS_CHANGE_ORDER,
    payload: { todo, currentTodo },
  };
};

export const fetchTodos = () => (dispatch) => {
  getTodos().then((todos) => {
    dispatch({ type: SET_TODOS, payload: { todos } });
  });
};
