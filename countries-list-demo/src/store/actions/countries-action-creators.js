import { Actions } from './countries-actions'

//ACTION CREATORS

function CountryCreationSave(country) {
    return {
        type: Actions.COUNTRY_CREATION_SAVE,
        payload: country
    }
}
function CountryCreationSaveSuccess(country) {
    return {
        type: Actions.COUNTRY_CREATION_SAVE_SUCCESS,
        payload: country
    }
}
function CountryCreationSaveError(error) {
    return {
        type: Actions.COUNTRY_CREATION_SAVE_ERROR,
        payload: error
    }
}
function SelectCountryAction(country) {
    return {
        type: Actions.SELECT_COUNTRY,
        payload: country
    }
}


//EXPORT FUNCTIONS

export function GetCountries() {
    return (dispatch) => {
        return dispatch({
            type: Actions.GET_COUNTRIES,
            promise: fetch("https://restcountries.eu/rest/v2/all")
        })
    }

}

export function SelectCountry(country) {
    return (dispatch) => {
        dispatch(SelectCountryAction(country));
    }
}

//Simulate an API Call on Save
const api = {
    submitCountry: (country) => new Promise((resolve, reject) => resolve(country))
}

export function SaveCountry(country){
    return (dispatch) => {
        dispatch(CountryCreationSave(country));
        
        return api.submitCountry(country)
        .then(response => {
            dispatch(CountryCreationSaveSuccess(response));
        })
        .catch(err => {
            dispatch(CountryCreationSaveError(err));
        });
    };
}