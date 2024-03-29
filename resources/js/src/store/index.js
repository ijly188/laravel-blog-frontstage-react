import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

const enhancer = applyMiddleware(
	thunk
);

export default createStore(reducers, composeWithDevTools(
  enhancer,
  // other store enhancers if any
));