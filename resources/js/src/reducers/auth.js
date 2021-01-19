import { redirect } from '../utility/global';

const initstate = {
  memberInfo: [],
}

export function authState(state = initstate, action) {
  state = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case 'SUBMIT_REGISTER_FORM': {
      redirect('/register-success');
      return state;
    }
    default:
      return state
  }
}