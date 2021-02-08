import React, { useCallback, useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

const Users = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.Reducers.loading);
  const users = useSelector((state) => state.Reducers.users);
  const error = useSelector((state) => state.Reducers.error);

  const userLists = useCallback(() => {
    return async () => {
      try {
        dispatch({ type: 'users_request' });
        const res = await axios.get(
          'https://jsonplaceholder.typicode.com/posts'
        );
        dispatch({ type: 'get_users_success', payload: res.data });
        console.log('response ', res);
      } catch (error) {
        dispatch({ type: 'get_users_failed', payload: error.message });
        console.log('error ', error);
      }
    };
  }, [dispatch]);

  useEffect(() => {
    userLists()();
  }, [userLists]);

  return (
    <div className="p-3 m-3">
      {loading ? (
        'Loading...'
      ) : error ? (
        <p className="text-warning">{error} try again!</p>
      ) : (
        users.map((user, index) => (
          <small className="d-block mb-2 bg-dark p-1" key={index}>
            {user.title}
          </small>
        ))
      )}
    </div>
  );
};

export default Users;