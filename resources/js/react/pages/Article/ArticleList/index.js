import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import { ArticleDetail } from '../ArticleDetail';

const ArticleList = ({ routes }) => {
  return (
    <div className="article-root">
      <div className="jumbotron">
        <h3 className="display-3">Article</h3>
        <Link to="/">home</Link>
        <Link to="/article/article-detail/1">article-detail</Link>
      </div>
    </div>
  );
}
export default { ArticleList };
export { ArticleList };