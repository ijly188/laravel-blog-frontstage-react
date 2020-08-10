import React from 'react';
import { Route, Link } from 'react-router-dom';

export default function Content() {
  return (
    <div className="home-root">
      <div className="jumbotron">
        <h3 className="display-3">Content</h3>
        <Link to="/login">Login</Link><br/>
        <Link to="/member">member</Link>
      </div>
    </div>
  );
}
