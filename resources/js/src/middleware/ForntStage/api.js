import { apiDefaultWithoutToken, apiDefaultWithToken } from '../api';

const prefix = 'frontApi';

// Auth-regitster
export const apiRegisterMember = (method, data) => apiDefaultWithoutToken[method](`/${prefix}/register`, data);
// article
export const apiGetArticlelist = (method) => apiDefaultWithoutToken[method](`/${prefix}/articles-list`);