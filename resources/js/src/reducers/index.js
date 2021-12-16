import { combineReducers } from 'redux';
import { commonState } from './common';
import { articleState } from './article';
import { exampleState } from './example';
import { exampleFormState } from './exampleForm';
import { memberState } from './member';

export default combineReducers({
  commonState,
  memberState,
  articleState,
  exampleState,
  exampleFormState,
});