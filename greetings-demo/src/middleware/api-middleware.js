export const apiMiddleware = store => next => action => {
    if (action.promise) {
        action.promise
            .then(apiResponse => apiResponse.json())
            .then(response => store.dispatch({ type: action.type, payload: response }));
    }
    else {
        next(action);
    }

}