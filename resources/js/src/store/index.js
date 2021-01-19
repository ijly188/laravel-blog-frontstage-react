import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { checkPass, examleFormMiddleware } from '../middleware/middleware';
import { articleMiddleware } from '../middleware/ForntStage/articleMiddleware';
import { authMiddleware } from '../middleware/ForntStage/authMiddleware';
import reducers from '../reducers';

const enhancer = applyMiddleware(
	checkPass,
	authMiddleware,
	articleMiddleware,
	examleFormMiddleware,
	thunk
);

export default createStore(reducers, composeWithDevTools(
  enhancer,
  // other store enhancers if any
));