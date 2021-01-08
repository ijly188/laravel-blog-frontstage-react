const initstate = {
  articleList: 0,
  articleInfo: 0,
}

// const initstate = [
//   {
//     text: 'Use Redux',
//     completed: false,
//     id: 0
//   },
//   {
//     text: 'Use Redux1111',
//     completed: true,
//     id: 1
//   }
// ]

// const getTodos = state => state.todos

export function articleListState(state = initstate, action) {
  const initState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case 'GETARTICLELIST': {
      let newCount = initState.articleList + 1;
      initState.articleList = newCount
      console.log(initState)
      return initState;
      // return state.map(todo => ({ ...todo, completed: !todo.completed }))
    }
    case 'GETARTICLEINFO': {
      let newCount = initState.articleInfo - 1;
      initState.articleInfo = newCount
      console.log(initState)
      return initState;
    }
    default:
      return initState 
   }
}