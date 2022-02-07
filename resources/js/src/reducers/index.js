import { combineReducers } from 'redux';
import { commonState } from './common/common';
// import { articleState } from './article';
// import { exampleState } from './example';
// import { exampleFormState } from './exampleForm';
import { FrontMemberState } from './frontStage/member';

export default combineReducers({
  commonState,
  FrontMemberState,
  // articleState,
  // exampleState,
  // exampleFormState,
});

// 現在這個架構弄前後台一起會有的問題會是會在前台看到後台的 key 跟資料