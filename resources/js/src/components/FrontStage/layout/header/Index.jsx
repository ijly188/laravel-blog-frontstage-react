import React, { Component } from 'react';

export default class Index extends Component {
  state = {
    isShowMenuDetail: false,
  }
  updateIsShowMenuDetail(){
    const {
      isShowMenuDetail
    } = this.state;

    this.setState({
      isShowMenuDetail: !isShowMenuDetail,      
    })
  }
  render() {
    const {
      isShowMenuDetail
    } = this.state;
    return (
      <nav className="navbar navbar-expand-lg navbar-light rounded">
        <div className="container-fluid">
          <button className="navbar-toggler collapsed"
            type="button" onClick={(e) => this.updateIsShowMenuDetail()}>
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            id="menuListWrap"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();

              this.updateIsShowMenuDetail()
            }}
            className={`navbar-collapse justify-content-md-start ${isShowMenuDetail ? "" : "collapse"}`}>
            <ul className="navbar-nav"
              onClick={(e) => {
                // 阻止冒泡，不然點了什麼都會關掉
                e.stopPropagation();
              }}
            >
              <li className="nav-item">
                <a className="nav-link text-light" aria-current="page" href="#">文章</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">個人頁面</a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link text-light disabled" href="#">Disabled</a>
              </li> */}
              <li className="nav-item dropdown">
                <a className="nav-link text-light dropdown-toggle d-none d-md-block d-lg-none d-xl-none" href="#" id="dropdown10">Dropdown</a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item text-light" href="#">Action</a></li>
                  <li><a className="dropdown-item text-light" href="#">Another action</a></li>
                  <li><a className="dropdown-item text-light" href="#">Something else here</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
