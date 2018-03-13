import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import rootReducer from '../store/rootReducer';
import { apiMiddleware } from '../middleware/api-middleware';
import { registrationMiddleware } from '../middleware/registration-middleware';
import { initialState } from '../store/initialState';

const middleware = applyMiddleware(
  thunkMiddleware,
  apiMiddleware,
  registrationMiddleware);

export default function configureStore() {
  return createStore(rootReducer,
    initialState,
    composeWithDevTools(middleware));
}