import { connect } from 'react-redux';
import Register from '../../components/FrontStage/Member/Register';
import { MID_SUBMIT_REGISTER_FORM } from '../../constants/middlewareActionsTypes';

// const mapStateToProps = (state) => {
// 	const { formData } = state.exampleFormState;
// 	return {
// 		formData: formData,
// 	};
// }

const mapDispatchToProps = dispatch => ({
	submitData: (payload) => dispatch({ type: MID_SUBMIT_REGISTER_FORM , payload: payload })
});

// 把state跟action function綁到主要畫面上輸出
export default connect(null, mapDispatchToProps)(Register);
