import { Actions } from '../store/actions/countries-actions';
import { SelectCountry } from '../store/actions/countries-action-creators';

export const CountriesMiddleware = store => next => action => {
    if(action.type === Actions.COUNTRY_CREATION_SAVE || action.type === Actions.UPDATE_COUNTRY) {
        store.dispatch(SelectCountry(action.payload));
    }

    next(action);
}