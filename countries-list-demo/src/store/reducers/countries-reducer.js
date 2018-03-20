import { Actions } from '../actions/countries-actions'

export const CountriesReducer = (state = [], action) => {
    switch(action.type){
        case Actions.COUNTRY_CREATION_SAVE:
            return [...state, action.payload];
        case Actions.GET_COUNTRIES:
            return action.payload;
        case Actions.UPDATE_COUNTRY:
            const updatedItems = state.map(country => {
                if (country.alpha3Code == action.payload.alpha3code) {
                    return { ...country, ...action.payload }
                }
                return country;
            })
            return updatedItems;
        default:
            return state;
    }
}

export const SelectCountryReducer = (state = {}, action) => {
    switch(action.type){
        case Actions.SELECT_COUNTRY:
            return action.payload;
        default: 
            return state;
    }
}