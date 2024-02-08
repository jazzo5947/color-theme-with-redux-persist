import { createSlice } from '@reduxjs/toolkit';
import { IRootState } from '../../store/states';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: { count: 0 },
  reducers: {
    increment: state => {
      state.count += 1;
    },
    decrement: state => {
      state.count -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export const selectCount = (state: IRootState) => state.counter.count;

export default counterSlice.reducer;
