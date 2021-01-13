import { combineReducers } from 'redux';
import { commonState } from './common';
import { articleListState } from './article';
import { exampleState } from './example';

export default combineReducers({
  commonState,
  articleListState,
  exampleState,
});