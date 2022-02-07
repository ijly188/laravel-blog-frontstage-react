const initState = {
  isLoading: false,
  isLogin: false
}

export function commonState(state = initState, action) {
  switch (action.type) {
    case 'UPDATE_LOADING_STATUS': {
      return {
        ...state,
        isLoading: action.payload,
      };
    }
    default:
      return state;
  }
}