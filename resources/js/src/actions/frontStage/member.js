import {
  refreshToken
} from '../../utility/global';

import {
  UPDATE_MEMBER_INFO
} from '../../constants/frontStage/actionsTypes';

import {
  updateLoadingStatus
} from '../common/common';

import {
  apiGetMemberInfo
} from '../api/frontStageApi';

// thunks
// 常數類型事件更新
export const updateMemberInfo = (memberInfo) => ({
  type: UPDATE_MEMBER_INFO,
  payload: memberInfo
});

// api類型事件更新
export const actionGetMemberInfo = (payload) => {
  return (dispatch, getState) => {
    // console.log(getState());
    dispatch(updateLoadingStatus(true));
    return apiGetMemberInfo('get').then((res) => {
      console.log(res.data.data);
      refreshToken(dispatch, res);

      dispatch(updateMemberInfo(res.data.data));
      dispatch(updateLoadingStatus(false));
    }).catch((err) => {
      console.log(err);
      
      // dispatch(updateLoadingStatus(false));
    })
  };
};
