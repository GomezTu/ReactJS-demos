import { combineReducers } from 'redux';
import { registrationReducer, countriesReducer } from '../reducers/register-reducer';
import { visitorReducer } from '../reducers/visitor-reducer';

export const reducer = combineReducers({
  registrations: registrationReducer,
  currentVisitor: visitorReducer,
  countries: countriesReducer,
});