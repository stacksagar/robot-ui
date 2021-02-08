const initialState = {
  subject: 'State Management',
  value: 3,
};

export const Value = (state = initialState, action) => {
  switch (action.type) {
    case 'plus':
      return {
        ...state,
        value: state.value + action.payload,
      };
    case 'minus':
      return {
        ...state,
        value: state.value - action.payload,
      };
    case 'changeSubject':
      return {
        ...state,
        subject: action.payload,
      };
    default:
      return state;
  }
};
