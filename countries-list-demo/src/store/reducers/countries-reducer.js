import { Actions } from '../actions/countries-actions'

export const CountriesReducer = (state = [], action) => {
    switch(action.type){
        case Actions.COUNTRY_CREATION_SAVE:
            return [...state, action];
        case Actions.GET_COUNTRIES:
            return action.payload;
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