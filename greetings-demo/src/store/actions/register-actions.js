export const Actions = {
  REGISTRATION_SAVE: 'REGISTRATION_SAVE',
  REGISTRATION_SAVE_SUCCESS: 'REGISTRATION_SAVE_SUCCESS',
  REGISTRATION_SAVE_ERROR: 'REGISTRATION_SAVE_ERROR',
  GET_COUNTRIES: 'GET_COUNTRIES',
};

function registerVisitorAction(visitor) {
  return {
    type: Actions.REGISTRATION_SAVE,
    payload: visitor
  };
}

function registerVisitorSuccess(visitor) {
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

export function getCountries() {
  return (dispatch) => {
    return dispatch({
      type: Actions.GET_COUNTRIES,
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
    }).catch(err => registerVisitorError(err));
  };
}