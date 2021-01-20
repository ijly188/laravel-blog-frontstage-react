import { connect } from 'react-redux';
import Login from '../../components/FrontStage/Member/Login';
import { MID_SUBMIT_LOGIN_FORM } from '../../constants/middlewareActionsTypes';

const mapStateToProps = (state) => {
	const { userToken } = state.memberState;
	return {
		userToken: userToken,
	};
}

const mapDispatchToProps = dispatch => ({
	submitData: (payload) => dispatch({ type: MID_SUBMIT_LOGIN_FORM , payload: payload })
});

// 把state跟action function綁到主要畫面上輸出
export default connect(mapStateToProps, mapDispatchToProps)(Login);
