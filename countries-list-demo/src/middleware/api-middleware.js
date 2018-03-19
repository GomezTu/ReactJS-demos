export const ApiMiddleware = store => next => action => {
    if (action.promise) {
        action.promise
            .then(apiResponse => apiResponse.json())
            .then(response => store.dispatch({ type: action.type, payload: response.slice(10, 20) }));
    }
    else {
        next(action);
    }
}