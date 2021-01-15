import { combineReducers } from 'redux';
import { commonState } from './common';
import { articleListState } from './article';
import { exampleState } from './example';
import { exampleFormState } from './exampleForm';

export default combineReducers({
  commonState,
  articleListState,
  exampleState,
  exampleFormState,
});