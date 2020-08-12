import React from 'react';
import { Route, Link } from 'react-router-dom';

const Content = () => {
  return (
    <div className="home-root">
      <div className="jumbotron">
        <Link to="/login">Login</Link><br/>
        <Link to="/member">member</Link><br/>
        <Link to="/create-article" className="btn content-button">
          <span className="icon-add font-weight-bold"></span>
          新增文章
        </Link>
        <div className="articlelist_wrap">
          <Link className="text-decoration-none" to="/article-detail/1">
            <div className="articlelist_list">
              <div className="articlelist_title h3 text-dark">下了房知有平放麼年企</div>
              <div className="articlelist_writer small">林亭妤</div>
              <div className="articlelist_content">
                重節前重反，言陸才法。確計天成生使子傳校我果什興言果單河全。何認地美海臺到什望她學演政片外麼不設上的座底成父子家節走了中天紋白樂。常取於否太！確計天成生使子傳校我果什興言果單河是全。何認地美海臺到什望她學演政片外麼不設上的座底成父子家節走了中天紋白樂。確計天成生使子傳校我果什興言果是單河是風重節前重反，言陸才法計天成生使子傳校我果什興言果是單河是風重節前重反，言陸才法河是風地美海臺到什望她確成..........
              </div>
              <div className="articlelist_readmore">(閱讀更多)</div>
            </div>
          </Link>
          
        </div>
        <div className="pagination_wrap">
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item"><a className="page-link" href="#">Previous</a></li>
              <li className="page-item"><a className="page-link" href="#">1</a></li>
              <li className="page-item"><a className="page-link" href="#">2</a></li>
              <li className="page-item"><a className="page-link" href="#">3</a></li>
              <li className="page-item"><a className="page-link" href="#">Next</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default { Content };
export { Content };