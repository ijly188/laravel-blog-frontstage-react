import React, { Component } from 'react';
import  Article  from '../containers/Article/ArticleContainer';

export default class IndexWrap extends Component {
  async componentDidMount() {
    await this.props.getMemberInfo();
  }
  render() {
    return (
      <div>
        indexwrap
        <Article />
        {
          Object.keys(this.props.memberInfo) ? JSON.stringify(this.props.memberInfo)
          :
          null
        }
      </div>
    )
  }
}
