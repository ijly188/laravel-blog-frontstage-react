import { apiRegisterMember, apiLogin, apiGetMemberInfo} from './api';
import { errorHandle } from '../https'
import * as constType from '../../constants/actionsTypes';

const memberMiddleware = store => next => action => {
	const refreshToken = (res) => {
		if (res.headers.authorization) {
			const newBearerToken = res.headers.authorization;
			const newToken = newBearerToken.substring(7);
			store.dispatch({type: constType.REFRESH_TOKEN, payload: newToken});
		}
	};

	switch (action.type) {
		case 'MID_SUBMIT_REGISTER_FORM':{
			store.dispatch({ type: constType.CHANGE_EFFECT_IS_LOADING, payload: true });
			apiRegisterMember('post', action.payload).then((res) => {
				store.dispatch({ type: constType.SUBMIT_REGISTER_FORM, payload: action.payload });
			}).catch((err => {
				console.log(err);
				const httpStatus = err.response.status;
				const errorMsg = err.response.data.message;
				errorHandle(httpStatus, errorMsg);
			}))
			store.dispatch({ type: constType.CHANGE_EFFECT_IS_LOADING, payload: false });
			return next(action);
		}
	 	case 'MID_SUBMIT_LOGIN_FORM': {
			store.dispatch({ type: constType.CHANGE_EFFECT_IS_LOADING, payload: true });
			apiLogin('post', action.payload).then((res) => {
				const token = res.data.data.token;
				store.dispatch({ type: constType.SET_USER_TOKEN, payload: token });
			}).catch((err) => {
				console.log(err);
			})
			store.dispatch({ type: constType.CHANGE_EFFECT_IS_LOADING, payload: false });
			return next(action);
		}
		case 'MID_GET_MEMBER_INFO': {
			store.dispatch({ type: constType.CHANGE_EFFECT_IS_LOADING, payload: true });
			apiGetMemberInfo('get').then((res) => {
				refreshToken(res);
				store.dispatch({ type: constType.GET_MEMBER_INFO, payload: res.data.data });
			}).catch((err) => {
				console.log(err);
			})
			store.dispatch({ type: constType.CHANGE_EFFECT_IS_LOADING, payload: false });
			return next(action);
		}
		default:
			return next(action);
	}
}

export { memberMiddleware };