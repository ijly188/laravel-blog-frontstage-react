import { connect } from 'react-redux';
import IndexWrap from '../../components/frontStage/IndexWrap';

import {
  actionGetMemberInfo
} from '../../actions/frontStage/member';

import {
  actionGetArticles
} from '../../actions/frontStage/article';

const mapStateToProps = (state) => {
  const { memberInfo } = state.FrontMemberState;
  
  return {
    memberInfo: memberInfo,
  };
}

const mapDispatchToProps = dispatch => ({
  dispatch: dispatch,
  
  getMemberInfo: (payload) => dispatch(actionGetMemberInfo(payload)),
  getArticles: (payload) => dispatch(actionGetArticles(payload)),
});

// 把state跟action function綁到主要畫面上輸出
export default connect(mapStateToProps, mapDispatchToProps)(IndexWrap);
