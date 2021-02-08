import { increment_count, decrement_count } from '../types';

const initialState = {
  count: 10,
};

export default function CounterReducer(state = initialState, action) {
  switch (action.type) {
    case increment_count:
      return {
        ...state,
        count: state.count + 1,
      };

    case decrement_count:
      return {
        ...state,
        count: state.count - 1,
      };

    default:
      return state;
  }
}
