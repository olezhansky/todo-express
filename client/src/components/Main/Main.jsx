import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import AddTodo from '../AddTodo/AddTodo';
import TodoList from '../TodoList/TodoList';
import NoTodos from '../../assets/NoTodos/NoTodos';
import Basket from '../Basket/Basket';
import { fetchTodos } from '../../store/todos/actions';

const Main = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);
  return (
    <>
      <Switch>
        <Route path="/todolist">
          <AddTodo />
          {todos.length !== 0 ? <TodoList todos={todos} /> : <NoTodos />}
        </Route>
        <Route path="/basket">
          <Basket />
        </Route>
        <Redirect to="/todolist" />
      </Switch>
    </>
  );
};

export default Main;
