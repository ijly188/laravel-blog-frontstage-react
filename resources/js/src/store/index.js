import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { checkPass, articleMiddleware, examleFormMiddleware } from "../middleware/middleware";
import reducers from '../reducers';

const enhancer = applyMiddleware(
	checkPass,
	articleMiddleware,
	examleFormMiddleware,
	thunk
);

export default createStore(reducers, composeWithDevTools(
  enhancer,
  // other store enhancers if any
));