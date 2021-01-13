const initstate = {
  isLoading: false
}

export function commonState(state = initstate, action) {
  state = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case 'CHANGE_EFFECT_ISLOADING': {
      action.payload ? state.isLoading = action.payload : state.isLoading = !state.isLoading;
      return state;
    }
    default:
      return state
  }
}