import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="Login-root">
      <div className="jumbotron">
        <h3 className="display-3">Login</h3>
        <Link to="/">home</Link>
      </div>
    </div>
  );
}
export default Login;