import {
  refreshToken
} from '../utility/global';
import {
  CHANGE_EFFECT_IS_LOADING,
  GET_MEMBER_INFO
} from '../constants/actionsTypes';
import {
  apiGetMemberInfo
} from '../middleware/FrontStage/api';

// export const actionGetMemberInfo = (payload) => ({ type: GET_MEMBER_INFO, payload });

export const actionGetMemberInfo = (payload) => {
  return (dispatch, getState) => {
    // console.log(getState());
    dispatch({ type: CHANGE_EFFECT_IS_LOADING, payload: true });
    return apiGetMemberInfo('get').then((res) => {
      refreshToken(dispatch, res);

      dispatch({ type: GET_MEMBER_INFO, payload: res.data.data });
      dispatch({ type: CHANGE_EFFECT_IS_LOADING, payload: false });
    }).catch((err) => {
      console.log(err);
    })
  };
};
