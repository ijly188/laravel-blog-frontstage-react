import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import Immutable from 'immutable';
import reducers from '../reducers';

// const initialState = Immutable.Map();

export default createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// export default createStore(reducers, initialState, applyMiddleware(thunk));
// export default createStore(reducers, applyMiddleware(thunk));