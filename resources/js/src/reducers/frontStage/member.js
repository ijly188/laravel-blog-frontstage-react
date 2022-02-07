import { redirect } from '../../utility/global';

const initState = {
  userToken: '',
  memberInfo: {
    test: "test"
  },
}

export function FrontMemberState(state = initState, action) {
  // 這行我覺得可以不用這時候加上去
  // state = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    // case 'SUBMIT_REGISTER_FORM': {
    //   redirect('/register-success');
    //   return state;
    // }
    // case 'SET_USER_TOKEN': {
    //   state.usertoken = action.payload;
    //   localStorage.setItem('token', action.payload);
    //   if (localStorage.token) {
    //     redirect('/');
    //   }
    //   return state;
    // }
    // case 'REFRESH_TOKEN': {
    //   state.usertoken = action.payload;
      
    //   localStorage.removeItem('token');
    //   localStorage.setItem('token', action.payload);
    //   window.location.reload();
    //   return state; 
    // }
    case 'GET_MEMBER_INFO': {
      state.memberInfo = action.payload;
      return state;
    }
    default:
      return state;
  }
}