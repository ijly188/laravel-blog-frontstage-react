import { connect } from 'react-redux';
import IndexWrap from '../components/IndexWrap';
import {
  actionGetMemberInfo
} from '../actions/member';

const mapStateToProps = (state) => {
  const { memberInfo } = state.memberState
  return {
    memberInfo: memberInfo,
  };
}

const mapDispatchToProps = dispatch => ({
  getMemberInfo: (payload) => dispatch(actionGetMemberInfo(payload)),
});

// 把state跟action function綁到主要畫面上輸出
export default connect(mapStateToProps, mapDispatchToProps)(IndexWrap);
