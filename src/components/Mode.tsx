import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectMode, setMode } from '../slices/mode/modeSlice';

enum MODE {
  LIGHT = 'light',
  DARK = 'dark',
}
const Mode = () => {
  const mode = useSelector(selectMode);
  const dispatch = useDispatch();

  const handleChangeMode: React.MouseEventHandler<
    HTMLButtonElement
  > = event => {
    if (mode === MODE.LIGHT) dispatch(setMode(MODE.DARK));
    else dispatch(setMode(MODE.LIGHT));
  };

  return (
    <button type="button" onClick={handleChangeMode}>
      {mode} 모드
    </button>
  );
};

export default Mode;
