import { connect } from 'react-redux';
import IndexWrap from '../components/IndexWrap';
import { MID_GET_MEMBER_INFO } from '../constants/middlewareActionsTypes';

const mapStateToProps = (state) => {
  const { memberInfo } = state.memberState
  return {
    memberInfo: memberInfo,
  };
}

const mapDispatchToProps = dispatch => ({
  getMemberInfo:(payload) => dispatch({ type: MID_GET_MEMBER_INFO }),
});

// 把state跟action function綁到主要畫面上輸出
export default connect(mapStateToProps, mapDispatchToProps)(IndexWrap);
