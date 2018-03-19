import { combineReducers } from 'redux';
import { reducer as greetings } from './reducers/reducer'

const RootReducer = combineReducers({
    greetings
});

export default RootReducer;