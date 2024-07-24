import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from '../redux/authSlice';

const Authentication = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  return (
    <div className="authentication">
      {isAuthenticated ? (
        <button onClick={() => dispatch(logout())} className='authBtn'>Logout</button>
      ) : (
        <button onClick={() => dispatch(login())} className='authBtn'>Login</button>
      )}
    </div>
  );
};

export default Authentication;
