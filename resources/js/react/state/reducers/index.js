import { combineReducers } from 'redux';
import Common from './Common';
import Effect from './Effect';
import Members from './Members';
import Articles from './Articles';

export default combineReducers({
    Common,
    Effect,
    Members,
    Articles,
});
