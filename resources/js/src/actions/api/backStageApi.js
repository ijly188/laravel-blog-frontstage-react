import store from '../../store';
import { apiDefaultWithoutToken, apiDefaultWithToken } from '../api';

const prefix = 'frontApi';

// member
export const apiRegisterMember = (method, data) => apiDefaultWithoutToken[method](`/${prefix}/register`, data);
export const apiLogin = (method, data) => apiDefaultWithoutToken[method](`/${prefix}/login`, data);
export const apiGetMemberInfo = (method) => apiDefaultWithToken[method](`/${prefix}/member-info`);
// article
export const apiGetArticlelist = (method) => apiDefaultWithoutToken[method](`/${prefix}/articles-list`);