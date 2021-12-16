const initState = {
  isLoading: false,
  isLogin: false
}

export function commonState(state = initState, action) {
  switch (action.type) {
    case 'CHANGE_EFFECT_IS_LOADING': {
      return {
        ...state,
        isLoading: action.payload,
      };
    }
    default:
      return state
  }
}