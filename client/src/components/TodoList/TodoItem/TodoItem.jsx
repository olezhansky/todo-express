/* eslint-disable react/require-default-props */
import React from 'react';
import { Checkbox } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  onChangeTodoAction,
  removeTodoAction,
} from '../../../store/todos/actions';
import { addTodoToBasketAction } from '../../../store/basketTodos/actions';
import styles from './TodoItem.module.css';

const TodoItem = ({ todo, index, dragStart, dragEnd, dragOver, drop }) => {
  const dispatch = useDispatch();

  const handleRemoveTodo = () => {
    dispatch(removeTodoAction(todo.id));
    dispatch(addTodoToBasketAction(todo));
  };

  const handleOnChangeTodo = () => dispatch(onChangeTodoAction(todo.id));

  return (
    <li
      onDragStart={(e) => dragStart(e, todo)}
      onDragLeave={(e) => dragEnd(e)}
      onDragEnd={(e) => dragEnd(e)}
      onDragOver={(e) => dragOver(e)}
      onDrop={(e) => drop(e, todo)}
      draggable
      className={styles.TodoItem}
    >
      <div className={styles.TodoItemMain}>
        <div className={styles.TodoItemMainContent}>
          <Checkbox
            value="checkedA"
            inputProps={{ 'aria-label': 'Checkbox A' }}
            checked={todo.completed}
            type="checkbox"
            onChange={handleOnChangeTodo}
          />
          <strong>{index + 1}</strong>
          &nbsp;
          <span
            className={classNames(styles, {
              [styles.Done]: todo.completed,
              [styles.Text]: true,
            })}
          >
            {todo.title}
          </span>
        </div>
        <IconButton aria-label="delete" onClick={handleRemoveTodo}>
          <DeleteIcon />
        </IconButton>
      </div>
      <div className={styles.TodoItemDate}>{todo.date}</div>
    </li>
  );
};

TodoItem.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  todo: PropTypes.object,
  index: PropTypes.number,
  dragStart: PropTypes.func,
  dragEnd: PropTypes.func,
  dragOver: PropTypes.func,
  drop: PropTypes.func,
};

export default TodoItem;
