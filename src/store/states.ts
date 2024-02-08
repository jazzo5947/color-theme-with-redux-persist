export interface ICounterState {
  count: number;
}

export interface IModeState {
  mode: 'light' | 'dark';
}

export interface IRootState {
  mode: IModeState;
  counter: ICounterState;
}
