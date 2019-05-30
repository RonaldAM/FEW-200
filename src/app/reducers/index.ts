import * as fromCounter from './counter.reducer';
export interface State {
  counter: fromCounter.State;

}
export const reducers = {
  counter: fromCounter.reducer
};
// selector functions
export const selectCurrentCount = (state: State) => state.counter.current;
