import * as constType from '../constants/actionsTypes';
import * as middlewareConstType from '../constants/middlewareActionsTypes';

// 傳過來的action有對應actionsTypes裡定義的type的時候讓它繼續執行action
const checkPass = store => next => action => {
  if (action.type === middlewareConstType[action.type]) {
    return next(action)
  } else if (action.type === constType[action.type]) {
    return next(action)
  } else {
    console.log('not pass check type')
  }
}

const exampleFormMiddleware = store => next => action => {
  switch (action.type) {
    case 'MID_SUBMIT_FORM':
      store.dispatch({ type: constType.CHANGE_EFFECT_IS_LOADING, payload: true });
      // 這邊可以多一層卡控 & 打api的response判斷
      store.dispatch({ type: constType.CHANGE_EFFECT_IS_LOADING, payload: false });
      return next(action)
    default:
      next(action)
  }
}
export { checkPass, exampleFormMiddleware };