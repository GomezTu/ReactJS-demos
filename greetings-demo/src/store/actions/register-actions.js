export const Actions = {
  REGISTRATION_SAVE: 'REGISTRATION_SAVE',
  REGISTRATION_SAVE_SUCCESS: 'REGISTRATION_SAVE_SUCCESS',
  REGISTRATION_SAVE_ERROR: 'REGISTRATION_SAVE_ERROR',
  FETCH_COUNTRIES: 'FETCH_COUNTRIES',
};

function registerVisitorAction(visitor) {
  return {
    type: Actions.REGISTRATION_SAVE,
    payload: visitor
  };
}

export function registerVisitorSuccess(visitor) {
  return {
    type: Actions.REGISTRATION_SAVE_SUCCESS,
    payload: visitor
  };
}

function registerVisitorError(error) {
  return {
    type: Actions.REGISTRATION_SAVE_ERROR,
    payload: error
  };
}

export function fetchCountries() {
  return (dispatch) => {
    return dispatch({
      type: Actions.FETCH_COUNTRIES,
      promise: fetch("https://restcountries.eu/rest/v2/all")
    })    
  }
}

const api = {
  submitVisitor: (visitor) => new Promise((resolve, reject) => resolve(visitor)),
};

export function registerVisitor(visitor) {
  return (dispatch) => {
    dispatch(registerVisitorAction(visitor));
    return api.submitVisitor(visitor).then(response => {
      dispatch(registerVisitorSuccess(response));
    })
      .catch(err => registerVisitorError(err));
  };
}