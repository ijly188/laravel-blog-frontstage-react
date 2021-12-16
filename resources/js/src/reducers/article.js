const initState = {
  articleList: [],
  articleInfo: [],
}

export function articleState(state = initState, action) {
  state = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case 'GET_ARTICLE_LIST': {
      let payload = JSON.parse(JSON.stringify(action.payload))
      state.articleList = payload;
      return state;
    }
    case 'GET_ARTICLE_INFO': {
      return state;
    }
    default:
      return state
  }
}