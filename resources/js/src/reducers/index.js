import { combineReducers } from 'redux';
import { articleListState } from './article';
import { exampleState } from './example';

export default combineReducers({
  articleListState,
  exampleState,
});