import { Actions } from '../actions/register-actions';

export const registrationReducer = (state = [], action) => {
  switch (action.type) {
    case Actions.REGISTRATION_SAVE_SUCCESS:
      return [...state, action.payload ];
    default:
      return state;
  }
}

export const countriesReducer = (state = [], action) => {
  switch (action.type) {
    case Actions.FETCH_COUNTRIES:
      return action.payload;
    default:
      return state;
  }
};