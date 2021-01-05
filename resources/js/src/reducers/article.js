const initstate = {
  articleList: 0,
  articleInfo: ""
}

export function articleList(state = initstate.articleList, action) {
  // console.log(state, action);
  switch (action.type) {
    case 'GETARTICLELIST': {
      return state + 1;
    }
    default:
      return state 
   }
}

export function articleInfo(state = initstate.articleInfo, action) {
  // console.log(state, action);
  switch (action.type) {
    case 'GETARTICLEINFO': {
      return state + 1;
    }
    default:
      return state 
   }
}

