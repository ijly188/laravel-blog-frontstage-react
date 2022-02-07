import React, { Component } from 'react';

import '../../../../sass/frontStage/pages/index.scss';

import Header from './layout/header/Index';

export default class IndexWrap extends Component {
  // 在這裡這樣做因為要保證 refreshToken 機制
  async componentDidMount() {
    const {
      getMemberInfo,
      getArticles
    } = this.props;
    // await getMemberInfo();
    getArticles();
  }
  render() {
    const {
      memberInfo,
    } = this.props;
    return (
      <div className='frontStage'>
        <Header />
        首頁<br/>
        indexWrap<br/>
        {
          memberInfo.test
        }
        {/* <Article /> */}
        {/* memberInfo:<br />
        {
          !memberInfo ? null :
            !Object.keys(memberInfo) ? null :
              JSON.stringify(memberInfo)
        } */}
      </div>
    )
  }
}
