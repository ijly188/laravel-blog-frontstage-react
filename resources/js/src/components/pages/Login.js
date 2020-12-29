import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRequestQuery } from '../../actions';

const Login = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchRequestQuery(dispatch);
  }, []);

  const { request } = useSelector(state => state);
  return (
    <span>{JSON.stringify(request)}</span>
  );
};

export default Login;