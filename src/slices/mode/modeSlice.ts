import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IRootState } from '../../store/states';

export const modeSlice = createSlice({
  name: 'mode',
  initialState: {
    mode: 'light',
  },
  reducers: {
    setMode: (state, action: PayloadAction<'light' | 'dark'>) => {
      state.mode = action.payload;
    },
  },
});

export const { setMode } = modeSlice.actions;
export const selectMode = (state: IRootState) => state.mode.mode;

export default modeSlice.reducer;
