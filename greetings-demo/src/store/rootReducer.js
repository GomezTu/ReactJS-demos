import { combineReducers } from 'redux';
import { reducer as greetings } from './reducers/reducer';

const rootReducer = combineReducers({
    greetings,
    //Add Another Module's Reducer
});

export default rootReducer;
