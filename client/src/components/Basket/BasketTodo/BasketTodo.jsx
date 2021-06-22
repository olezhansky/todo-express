/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './BasketTodo.module.css';

const BasketTodo = ({ basketTodo }) => {
  return (
    <li className={styles.BasketTodo}>
      <div>{basketTodo.title}</div>
      <div className={styles.BasketTodoItemDate}>{basketTodo.date}</div>
    </li>
  );
};

BasketTodo.propTypes = {
  // eslint-disable-next-line react/require-default-props
  basketTodo: PropTypes.object,
};

export default BasketTodo;
