import store from '../../store';
import { apiDefaultWithoutToken, apiDefaultWithToken } from '../common/api';

const prefix = 'frontApi';

// member
export const apiRegisterMember = (method, data) => apiDefaultWithoutToken[method](`/${prefix}/register`, data);
export const apiLogin = (method, data) => apiDefaultWithoutToken[method](`/${prefix}/login`, data);
export const apiGetMemberInfo = (method) => apiDefaultWithToken[method](`/${prefix}/member-info`);
// article
export const apiGetArticleList = (method) => apiDefaultWithoutToken[method](`/${prefix}/articles-list`);