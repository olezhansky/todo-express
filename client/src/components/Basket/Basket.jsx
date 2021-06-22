import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import styles from './Basket.module.css';
import BasketTodo from './BasketTodo/BasketTodo';

import { clearAllBasketTodoAction } from '../../store/basketTodos/actions';

const Basket = () => {
  const basketTodos = useSelector((state) => state.basketTodos);

  const dispatch = useDispatch();

  const handleDeleteAllBasketTodo = () => {
    dispatch(clearAllBasketTodoAction());
  };
  return (
    <div className={styles.Basket}>
      {basketTodos.length !== 0 ? (
        <div className={styles.BasketButton}>
          <Button
            onClick={handleDeleteAllBasketTodo}
            variant="contained"
            color="secondary"
          >
            Clear All
          </Button>
        </div>
      ) : (
        <p>Basket is empty</p>
      )}
      <ul>
        {basketTodos.map((basketTodo, index) => {
          return (
            <BasketTodo
              basketTodo={basketTodo}
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              index={basketTodo.id}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Basket;
