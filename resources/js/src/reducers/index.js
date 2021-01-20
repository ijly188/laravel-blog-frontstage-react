import { combineReducers } from 'redux';
import { commonState } from './common';
import { articleListState } from './article';
import { exampleState } from './example';
import { exampleFormState } from './exampleForm';
import { memberState } from './member';

export default combineReducers({
  commonState,
  memberState,
  articleListState,
  exampleState,
  exampleFormState,
});