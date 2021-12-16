import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { checkPass, exampleFormMiddleware } from '../middleware/middleware';
import { articleMiddleware } from '../middleware/FrontStage/articleMiddleware';
import { memberMiddleware } from '../middleware/FrontStage/memberMiddleware';
import reducers from '../reducers';

const enhancer = applyMiddleware(
	checkPass,
	memberMiddleware,
	articleMiddleware,
	exampleFormMiddleware,
	thunk
);

export default createStore(reducers, composeWithDevTools(
  enhancer,
  // other store enhancers if any
));