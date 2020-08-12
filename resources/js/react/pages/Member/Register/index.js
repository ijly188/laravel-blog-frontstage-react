import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

const Register = () => {
  return (
    <div className="member-root">
      <div className="jumbotron">
        <h3 className="display-3">Register</h3>
        <Link to="/">home</Link>
        <Link to="/member-detail/1">memberdetail</Link>
      </div>
    </div>
  );
}
export default { Register };
export { Register };