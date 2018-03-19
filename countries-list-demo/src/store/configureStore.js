import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import RootReducer from '../store/rootReducer'
import { ApiMiddleware } from '../middleware/api-middleware'
import { CountriesMiddleware } from '../middleware/countries-middleware'
import { initialState } from '../store/initialState'

export default function ConfigureStore () {
    return createStore(
        RootReducer,
        initialState,
        composeWithDevTools(
            applyMiddleware(
                thunkMiddleware,
                ApiMiddleware,
                CountriesMiddleware)
            )
    );
}