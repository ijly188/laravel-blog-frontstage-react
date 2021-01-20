const initstate = {
  isLoading: false,
  isLogin: false
}

export function commonState(state = initstate, action) {
  state = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case 'CHANGE_EFFECT_ISLOADING': {
      state.isLoading ? state.isLoading : action.payload;
      return state;
    }
    default:
      return state
  }
}