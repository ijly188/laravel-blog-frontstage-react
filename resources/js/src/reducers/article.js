const initstate = {
  articleList: [],
  articleInfo: [],
}

export function articleListState(state = initstate, action) {
  state = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case 'GETARTICLELIST': {
      let payload = JSON.parse(JSON.stringify(action.payload))
      state.articleList = payload;
      return state;
    }
    case 'GETARTICLEINFO': {
      return state;
    }
    default:
      return state
  }
}