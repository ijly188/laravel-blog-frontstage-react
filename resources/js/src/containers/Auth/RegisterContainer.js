import { connect } from 'react-redux';
import Register from '../../components/Auth/Register';
import { MID_SUBMITFORM } from '../../constants/middlewareActionsTypes';

const mapStateToProps = (state) => {
	const { formData } = state.exampleFormState;
	return {
		formData: formData,
	};
}

const mapDispatchToProps = dispatch => ({
	submitData: (payload) => dispatch({ type: MID_SUBMITFORM , payload: payload })
});

// 把state跟action function綁到主要畫面上輸出
export default connect(mapStateToProps, mapDispatchToProps)(Register);
