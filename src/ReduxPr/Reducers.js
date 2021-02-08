const initialState = {
  count: 10,
  headline: 'I am Reducer',
  users: [],
  loading: false,
  error: '',
};

export default function Reducers(state = initialState, action) {
  switch (action.type) {
    case 'increment':
      return {
        ...state,
        count: state.count + action.count,
      };
    case 'decrement':
      return {
        ...state,
        count: state.count - action.count,
      };

    case 'changeHeadline':
      return {
        ...state,
        headline: action.headline,
      };

    case 'users_request':
      return {
        ...state,
        loading: true,
      };

    case 'get_users_success':
      return {
        ...state,
        users: action.payload,
        loading: false,
      };

    case 'get_users_failed':
      return {
        ...state,
        users: [],
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
}
