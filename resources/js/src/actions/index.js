
import * as types from '../constants/actionsTypes';

// article
export const getArticleList = () => ({ type: types.GETARTICLELIST })
export const getArticleInfo = () => ({ type: types.GETARTICLEINFO })
// example
export const changeArray = () => ({ type: types.CHANGE_ARRAY })
export const changeObject = () => ({ type: types.CHANGE_OBJECT })
export const changeString = () => ({ type: types.CHANGE_STRING })
export const changeInt = () => ({ type: types.CHANGE_INT })