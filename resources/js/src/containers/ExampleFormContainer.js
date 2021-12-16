import { connect } from 'react-redux';
import ExampleForm from '../components/ExampleForm';
import { MID_SUBMIT_FORM } from '../constants/middlewareActionsTypes';

const mapStateToProps = (state) => {
	const { formData } = state.exampleFormState;
	return {
		formData: formData,
	};
}

const mapDispatchToProps = dispatch => ({
	submitData: (payload) => dispatch({ type: MID_SUBMIT_FORM , payload: payload })
});

// 把state跟action function綁到主要畫面上輸出
export default connect(mapStateToProps, mapDispatchToProps)(ExampleForm);
