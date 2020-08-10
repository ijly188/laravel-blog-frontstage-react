import React from 'react';
import { NavLink } from 'react-router-dom';

function isNavLinkActive(currentPath) {
  return (match, location) => location.pathname === currentPath;
}

export default function Header() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top nav-bg">
      <div className="container">
        <NavLink isActive={isNavLinkActive('/')} to="/" className="navbar-brand" exact>
          <img src="/img/logo_white.png" className="logo-img"/>
        </NavLink>
        <div className="form-inline mt-2 mt-md-0">
          <input className="form-control mr-sm-2 nav-search" type="text" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">登入</button>
        </div>
      </div>
    </nav>
    // <nav>
    //   <ul className="menu">
    //     <li className="menu-item"><NavLink isActive={isNavLinkActive('/')} to="/" exact>Home</NavLink></li>
    //     <li className="menu-item"><NavLink isActive={isNavLinkActive('/video')} to="/video">Videos</NavLink></li>
    //   </ul>
    // </nav>
  );
}
// 選單用的link會用上面的NavLink因為會有isActive可以用
// router exact模式現在已經沒有效果因為現在我們已經做手動匹配的效果了，這裡指的是isActive的效果
// 在menu裡面我們會加上精準模式的原因是因為/, /video對router來講, /video是/的子路由，所以一定要用精準模式一定要一模一樣才會把下面的component render出來
