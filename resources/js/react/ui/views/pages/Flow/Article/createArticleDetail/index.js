import React from 'react';
import { Link } from 'react-router-dom';

const createArticleDetail = () => {
  return (
    <div className="ArticleDetail-root">
      <div className="jumbotron">
        <h3 className="display-3">createArticleDetail</h3>
        <Link to="/">home</Link>
        <Link to="/article">Article</Link>
      </div>
    </div>
  );
}
export default { createArticleDetail };
export { createArticleDetail };