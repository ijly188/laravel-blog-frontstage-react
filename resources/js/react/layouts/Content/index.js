import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home-root">
      <div className="jumbotron">
        <h3 className="display-3">Content</h3>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
}
