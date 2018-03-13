import { Actions } from '../actions/visitor-actions';

export const visitorReducer = (state = {}, action) => {
  
  switch (action.type) {
    case Actions.REGISTRATION_SAVE_SUCCESS:
    case Actions.VISITOR_SELECTED:
      return action.payload;
    default:
      return state;
  }
}

