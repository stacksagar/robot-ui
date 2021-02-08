import React from 'react';
import Counter from './Counter';
import { Provider } from 'react-redux';
import { store } from './services/store';
const ReduxPractice = () => {
  return (
    <Provider store={store}>
      <div>
        <Counter />
      </div>
    </Provider>
  );
};

export default ReduxPractice;
