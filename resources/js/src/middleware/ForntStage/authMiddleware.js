import { apiRegisterMember } from '../ForntStage/api';
import { errorHandle } from '../https'
import * as constType from '../../constants/actionsTypes';

const authMiddleware = store => next => action => {
	switch (action.type) {
		case 'MID_SUBMIT_REGISTER_FORM':
			store.dispatch({ type: constType.CHANGE_EFFECT_ISLOADING, payload: true });
			apiRegisterMember('post', action.payload).then((res) => {
				store.dispatch({ type: constType.SUBMIT_REGISTER_FORM, payload: action.payload });
			}).catch((err => {
				console.log(err);
				const httpStatus = err.response.status;
				const errorMsg = err.response.data.message;
				errorHandle(httpStatus, errorMsg);
			}))
			store.dispatch({ type: constType.CHANGE_EFFECT_ISLOADING, payload: false });
			return next(action)
		case '':
			// do something...
			return
		default:
			return next(action)
	}
}

export { authMiddleware };