import * as constType from '../constants/actionsTypes';
import * as middlewareConstType from '../constants/middlewareActionsTypes';
import { apiGetArticlelist } from '../middleware/api';

// 傳過來的action有對應actionsTypes裡定義的type的時候讓它繼續執行action
const checkPass = store => next => action => {
  if (action.type === middlewareConstType[action.type]) {
    return next(action)
  } else if (action.type === constType[action.type]) {
    return next(action)
  } else {
    console.log('not pass check type')
    // do something...
  }
}

const articleMiddleware = store => next => action => {
  switch (action.type) {
    case 'MID_GETARTICLELIST':
      store.dispatch({ type: constType.CHANGE_EFFECT_ISLOADING, payload: true })
      apiGetArticlelist().then((res) => {
        store.dispatch({ type: constType.GETARTICLELIST, payload: res.data });
        store.dispatch({ type: constType.CHANGE_EFFECT_ISLOADING, payload: false })
      }).catch((err => {
        console.log(err);
      }))
      return next(action)
    case 'MID_GETARTICLEINFO':
      // do something...
      return
    default:
      // 這邊記得要return next(action), 因為從middleware dispatch的action會再以新的dispatch結果callback回來,
      // 此時middleware上面的case比對不到actionType但是我們要讓他可以順利進到reducer所以要加return next(action)
      // 可以參考這篇https://max80713.medium.com/%E8%A9%B3%E8%A7%A3-redux-middleware-efd6a506357e
      return next(action)
  }
}

const examleFormMiddleware = store => next => action => {
  switch (action.type) {
    case 'MID_SUBMITFORM':
      store.dispatch({ type: constType.CHANGE_EFFECT_ISLOADING, payload: true });
      // 這邊可以多一層卡控
      store.dispatch({ type: constType.SUBMITFORM, payload: action.payload });
      store.dispatch({ type: constType.CHANGE_EFFECT_ISLOADING, payload: false });
      return next(action)
    default:
      next(action)
  }
}
export { checkPass, articleMiddleware, examleFormMiddleware };