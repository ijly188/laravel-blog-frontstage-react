import { combineReducers } from 'redux';
import { commonState } from './common';
import { articleListState } from './article';
import { exampleState } from './example';
import { exampleFormState } from './exampleForm';
import { authState } from './auth';

export default combineReducers({
  commonState,
  authState,
  articleListState,
  exampleState,
  exampleFormState,
});