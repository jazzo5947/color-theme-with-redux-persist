import {
  decrement,
  increment,
  selectCount,
} from '../slices/counter/counterSlice';
import styles from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux';

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
    </>
  );
}

export default Counter;
