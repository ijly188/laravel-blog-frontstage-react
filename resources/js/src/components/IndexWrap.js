import React, { Component } from 'react';
import  Article  from '../containers/Article/ArticleContainer';

export default class IndexWrap extends Component {
  // 在這裡這樣做因為要保證 refreshToken 機制
  async componentDidMount() {
    const {
      getMemberInfo
    } = this.props;
    await getMemberInfo();
  }
  render() {
    const {
      memberInfo,
    } = this.props;
    return (
      <div>
        indexwrap
        <Article />
        memberInfo:<br />
        {
          !memberInfo ? null :
            !Object.keys(memberInfo) ? null :
              JSON.stringify(memberInfo)
        }
      </div>
    )
  }
}
